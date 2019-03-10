import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookId:string;
  constructor(private bookService:BooksService,
    public dialogRef: MatDialogRef<DeleteBookComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete():void{
    console.log(this.bookId);
    this.bookService.deleteBook(this.bookId).subscribe();
    this.dialogRef.close();
  }

  cancel():void{
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
