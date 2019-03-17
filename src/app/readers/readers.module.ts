import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadersComponent } from './readers/readers.component';
import { MatButtonModule, MatCardModule, MatListModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSortModule, MatTableModule, MatSelect, MatSelectModule } from '@angular/material';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { ShowReaderComponent } from './show-reader/show-reader.component';
import { DeleteReaderComponent } from './delete-reader/delete-reader.component';
import { BooksOfReaderComponent } from './books-of-reader/books-of-reader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ReadersComponent, AddReaderComponent, ShowReaderComponent, DeleteReaderComponent, BooksOfReaderComponent],
  imports: [
    HttpClientModule,
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
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollDispatchModule,
  ],
  entryComponents: [ReadersComponent, AddReaderComponent, ShowReaderComponent, DeleteReaderComponent, BooksOfReaderComponent]
})
export class ReadersModule { }
