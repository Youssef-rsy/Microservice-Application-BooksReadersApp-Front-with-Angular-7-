import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';

@Component({
  selector: 'app-books-of-reader',
  templateUrl: './books-of-reader.component.html',
  styleUrls: ['./books-of-reader.component.css']
})
export class BooksOfReaderComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BooksOfReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
