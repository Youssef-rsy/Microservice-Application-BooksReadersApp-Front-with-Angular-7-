import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteBookComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
