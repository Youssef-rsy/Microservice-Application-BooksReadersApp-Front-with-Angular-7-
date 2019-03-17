import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Reader } from '../reader';
import { ReadersService } from '../readers.service';
import { Book } from '../../books/book';

@Component({
  selector: 'app-books-of-reader',
  templateUrl: './books-of-reader.component.html',
  styleUrls: ['./books-of-reader.component.css']
})
export class BooksOfReaderComponent implements OnInit {
    booksData:string[];
    book:Book ;
    displayedColumns: string[] = [ 'bookTitle'];
    dataSource: MatTableDataSource<string>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    public showBookDetail = false;

  constructor(private redearService:ReadersService,
    public dialogRef: MatDialogRef<BooksOfReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.booksData);
    this.dataSource=new MatTableDataSource(this.booksData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.book =  {"bookId" :"",
                  "title":"",
                  "author":"",
                  "description":"",
                  "numberOfPage":0
                };
  }
  showBookDetals(selectedBook){
    console.log(selectedBook);
    this.redearService.getBookInformation(selectedBook).subscribe(data=>{
      this.book = data;
    });
    this.showBookDetail = true ;
    console.log(this.showBookDetail);
  }
}
