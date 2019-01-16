import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';

@Component({
  selector: 'app-delete-reader',
  templateUrl: './delete-reader.component.html',
  styleUrls: ['./delete-reader.component.css']
})
export class DeleteReaderComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
