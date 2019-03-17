import { Component, OnInit, Inject, Renderer2, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';
import { FormControl } from '@angular/forms';
import { ReadersService } from '../readers.service';

@Component({
  selector: 'app-show-reader',
  templateUrl: './show-reader.component.html',
  styleUrls: ['./show-reader.component.css']
})
export class ShowReaderComponent implements OnInit {
  readerId:string;
  reader:Reader;
  

  showeBook;
  constructor(
    private readersService:ReadersService,
    private renderer:Renderer2,
    public dialogRef: MatDialogRef<ShowReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
   this.readersService.getReader(this.readerId).subscribe(data=>{
      this.reader = data;
      console.log(this.reader);
   });
  }

  onChange(book){
    console.log(book.value);
    //this.renderer.setStyle("block2" , "display",'block');
   this.showeBook=book.value;
  }

}
