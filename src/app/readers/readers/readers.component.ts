import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Reader } from '../reader';
import { ShowReaderComponent } from '../show-reader/show-reader.component';
import { DeleteReaderComponent } from '../delete-reader/delete-reader.component';
import { AddReaderComponent } from '../add-reader/add-reader.component';
import { BooksOfReaderComponent } from '../books-of-reader/books-of-reader.component';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  booksData:Reader[]=[
    {readerId:'id1',readerFirstName:'Rossamy',readerLastName:'rossamy',readerListOfBook:['book1','book2','book3']}
    ];

displayedColumns: string[] = [ 'readerFirstName', 'readerLastName','readerListOfBook','operation'];
dataSource: MatTableDataSource<Reader>=new MatTableDataSource(this.booksData);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(public dialog: MatDialog) {}


openDialogShowReader(): void {
  const dialogRef = this.dialog.open(ShowReaderComponent,{panelClass: 'books-readers-dialog-container'});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   //this.animal = result;
  });
}
openDialogDeleteReader(): void {
  const dialogRef = this.dialog.open(DeleteReaderComponent,{panelClass: 'books-readers-dialog-container'});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   //this.animal = result;
  });
}
openDialogAddReader(): void {
  const dialogRef = this.dialog.open(AddReaderComponent,{panelClass: 'books-readers-dialog-container'});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   //this.animal = result;
  });
}
openDialogReaderBooks(): void {
  const dialogRef = this.dialog.open(BooksOfReaderComponent,{panelClass: 'books-readers-dialog-container'});

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
