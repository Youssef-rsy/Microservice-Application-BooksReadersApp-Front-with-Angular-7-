import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reader } from '../reader';
import { FormControl } from '@angular/forms';
import { ReadersService } from '../readers.service';
import { BooksService } from '../../books/books.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  books = new FormControl();
  booksList: String[];// = ['book 1', 'book 2', 'book 3', 'book 4', 'book 5', 'book 6'];
  
  constructor(private bookService:BooksService,private readerService:ReadersService,
              public dialogRef: MatDialogRef<AddReaderComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: Reader
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.bookService.findAllBook().subscribe((data)=>{
      let books:any = data;
     
      this.booksList = new Array<String>(books.length);
      for(var i=0;i<books.length;i++){
        this.booksList[i] = books[i]['title'].toString(); 
      }
    })
    
  }
  addReader(reader){
    console.dir(reader);
    this.readerService.addReader(reader).subscribe();
  }
}
