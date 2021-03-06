import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  bookId:string;
  displayBook:Book;

  constructor(private bookService: BooksService,
    public dialogRef: MatDialogRef<ShowBookComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit() {
    this.bookService.getBook(this.bookId).subscribe(data =>{
      this.displayBook = data;
    }
    );
  }

}
