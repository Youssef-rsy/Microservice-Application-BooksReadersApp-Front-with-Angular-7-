import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Book } from '../book';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { ShowBookComponent } from '../show-book/show-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   booksData:Book[]=[
      {bookId:'book1',bookTitle:"In Death Ground",bookAuthor:"Dr. Javier Gleichner",bookDescription:"And I have a tender spot in my heart for cripples and bastards and broken things.",bookPageNumber:10},
      {bookId:'book1',bookTitle:"th power of your subcen mind",bookAuthor:"Emery Lakin",bookDescription:"description",bookPageNumber:80},
      {bookId:'book1',bookTitle:"The Curious Incident of the Dog in the Night-Time",bookAuthor:"author",bookDescription:"And I have a tender spot in my heart for cripples and bastards and broken things",bookPageNumber:18},
      ];

  displayedColumns: string[] = [ 'bookTitle', 'bookAuthor', 'bookDescription','bookPageNumber','operation'];
  dataSource: MatTableDataSource<Book>=new MatTableDataSource(this.booksData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  openDialogShowBook(): void {
    const dialogRef = this.dialog.open(ShowBookComponent,{panelClass: 'books-readers-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     //this.animal = result;
    });
  }
  openDialogDeleteBook(): void {
    const dialogRef = this.dialog.open(DeleteBookComponent,{panelClass: 'books-readers-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     //this.animal = result;
    });
  }
  openDialogAddBook(): void {
    const dialogRef = this.dialog.open(AddBookComponent,{panelClass: 'books-readers-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     //this.animal = result;
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
