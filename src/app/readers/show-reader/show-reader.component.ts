import { Component, OnInit, Inject, Renderer2, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-reader',
  templateUrl: './show-reader.component.html',
  styleUrls: ['./show-reader.component.css']
})
export class ShowReaderComponent implements OnInit {

  books = new FormControl();
  booksList: string[] = ['book 1', 'book 2', 'book 3', 'book 4', 'book 5', 'book 6'];
  block1;

  showeBook;
  constructor(
    private renderer:Renderer2,
    public dialogRef: MatDialogRef<ShowReaderComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if(this.showeBook){

    }else{

    }
  }

  onChange(book){
    console.log(book.value);
    //this.renderer.setStyle("block2" , "display",'block');
   this.showeBook=book.value;
  }

}
