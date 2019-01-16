import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadersComponent } from './readers/readers.component';
import { MatButtonModule, MatCardModule, MatListModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSortModule, MatTableModule } from '@angular/material';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { ShowReaderComponent } from './show-reader/show-reader.component';
import { DeleteReaderComponent } from './delete-reader/delete-reader.component';
import { BooksOfReaderComponent } from './books-of-reader/books-of-reader.component';

@NgModule({
  declarations: [ReadersComponent, AddReaderComponent, ShowReaderComponent, DeleteReaderComponent, BooksOfReaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  entryComponents: [ReadersComponent, AddReaderComponent, ShowReaderComponent, DeleteReaderComponent, BooksOfReaderComponent]
})
export class ReadersModule { }
