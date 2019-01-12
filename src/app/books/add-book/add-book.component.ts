import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddBookComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
