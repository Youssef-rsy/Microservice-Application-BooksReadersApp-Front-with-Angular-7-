import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Book } from '../book';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { ShowBookComponent } from '../show-book/show-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   booksData:Book[];

  displayedColumns: string[] = [ 'title', 'author', 'description','numberOfPage','operation'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private bookservice :BooksService) {}

  openDialogShowBook(bookId): void {
    const dialogRef = this.dialog.open(ShowBookComponent,{panelClass: 'books-readers-dialog-container'});
    dialogRef.componentInstance.bookId = bookId;
  }
  openDialogDeleteBook(bookId:string): void {
    console.log(bookId);
    let dialogRef = this.dialog.open(DeleteBookComponent,{panelClass: 'books-readers-dialog-container'});
    dialogRef.componentInstance.bookId = bookId;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getData();  
     
    });
  }
  openDialogAddBook(): void {
    const dialogRef = this.dialog.open(AddBookComponent,{panelClass: 'books-readers-dialog-container'});
   // dialogRef.componentInstance.book = ;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');  
      this.getData();  
    });
  }

  ngOnInit() {
    this.getData();    
  }
  getData() : void{
    this.bookservice.findAllBook().subscribe((books : any)=>{
      this.booksData = books;
      console.log(books);
      //console.log(this.booksData);
      this.dataSource =new MatTableDataSource(this.booksData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
