import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';
import { ReadersService } from '../readers.service';

@Component({
  selector: 'app-delete-reader',
  templateUrl: './delete-reader.component.html',
  styleUrls: ['./delete-reader.component.css']
})
export class DeleteReaderComponent implements OnInit {
   readerId:string;
   firstName:string;
   lastName:string;
  constructor(private readerService:ReadersService,
    public dialogRef: MatDialogRef<DeleteReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  delete():void{
    console.log(this.readerId);
    this.readerService.deleteReader(this.readerId).subscribe();
    this.dialogRef.close();
  }

  cancel():void{
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
