import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Reader } from '../reader';
import { ShowReaderComponent } from '../show-reader/show-reader.component';
import { DeleteReaderComponent } from '../delete-reader/delete-reader.component';
import { AddReaderComponent } from '../add-reader/add-reader.component';
import { BooksOfReaderComponent } from '../books-of-reader/books-of-reader.component';
import { ReadersService } from '../readers.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  readersData:Reader[];

displayedColumns: string[] = [ 'readerFirstName', 'readerLastName','readerListOfBook','operation'];
dataSource: MatTableDataSource<Reader>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(public dialog: MatDialog,private readersServices:ReadersService) {}


openDialogShowReader(readerId:string): void {
  const dialogRef = this.dialog.open(ShowReaderComponent,{panelClass: 'books-readers-dialog-container'});
  dialogRef.componentInstance.readerId = readerId;
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   //this.animal = result;
  });
}
openDialogDeleteReader(readerId:string,firstName:string,lastName:string): void {
  const dialogRef = this.dialog.open(DeleteReaderComponent,{panelClass: 'books-readers-dialog-container'});
  dialogRef.componentInstance.readerId = readerId;
  dialogRef.componentInstance.firstName = firstName;
  dialogRef.componentInstance.lastName = lastName;
  dialogRef.afterClosed().subscribe(result => {
    this.getData();
  });
}
openDialogAddReader(): void {
  const dialogRef = this.dialog.open(AddReaderComponent,{panelClass: 'books-readers-dialog-container'});

  dialogRef.afterClosed().subscribe(result => {
    this.getData();
  });
}
openDialogReaderBooks(booksReaded): void {
  const dialogRef = this.dialog.open(BooksOfReaderComponent,{panelClass: 'books-readers-dialog-container'});
  dialogRef.componentInstance.booksData = booksReaded;
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   //this.animal = result;
  });
}

ngOnInit() {
  
  this.getData();
 
}

getData(){
  this.readersServices.findAllReaders().subscribe(data=>{
    console.log(data);
  this.readersData = data;
  this.dataSource = new MatTableDataSource(this.readersData);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
})
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
