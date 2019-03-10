import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Reader } from '../reader';

@Component({
  selector: 'app-books-of-reader',
  templateUrl: './books-of-reader.component.html',
  styleUrls: ['./books-of-reader.component.css']
})
export class BooksOfReaderComponent implements OnInit {
  booksData:any[]=[
    {bookTitle:"In Death Ground"},
    {bookTitle:"th power of your subcen mind"},
    {bookTitle:"The Curious Incident of the Dog in the Night-Time"},
    {bookTitle:"In Death Ground"},
    {bookTitle:"th power of your subcen mind"},
    {bookTitle:"The Curious Incident of the Dog in the Night-Time"},{bookTitle:"In Death Ground"},
    {bookTitle:"th power of your subcen mind"},
    {bookTitle:"The Curious Incident of the Dog in the Night-Time"},
    ];
    displayedColumns: string[] = [ 'bookTitle'];
    dataSource: MatTableDataSource<any>=new MatTableDataSource(this.booksData);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    public showBookDetail = false;

  constructor(
    public dialogRef: MatDialogRef<BooksOfReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  showBookDetals(selectedBook){
    console.log(selectedBook);
    this.showBookDetail = true ;
    console.log(this.showBookDetail);
  }
}
