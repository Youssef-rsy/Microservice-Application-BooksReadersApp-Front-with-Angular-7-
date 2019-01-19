import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  books = new FormControl();
  booksList: string[] = ['book 1', 'book 2', 'book 3', 'book 4', 'book 5', 'book 6'];
  
  constructor(
    public dialogRef: MatDialogRef<AddReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
