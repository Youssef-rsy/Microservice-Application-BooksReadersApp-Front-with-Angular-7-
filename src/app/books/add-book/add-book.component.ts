import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { Form } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book;
  form:Form;
  constructor(private bookService:BooksService,
    public dialogRef: MatDialogRef<AddBookComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addBook(book) {
    this.bookService.saveBook(book).subscribe();
    this.onNoClick();
  }
  ngOnInit() {

  }
}
