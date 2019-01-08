import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Book } from '../book';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { ShowBookComponent } from '../show-book/show-book.component';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
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
  /*displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;*/

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowBookComponent);

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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}