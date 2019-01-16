import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';

@Component({
  selector: 'app-show-reader',
  templateUrl: './show-reader.component.html',
  styleUrls: ['./show-reader.component.css']
})
export class ShowReaderComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
