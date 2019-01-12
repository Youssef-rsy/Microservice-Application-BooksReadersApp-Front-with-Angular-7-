import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { AnguarMaterialModule } from '../anguar-material/anguar-material.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatIcon,
  MatFormFieldModule,
} from '@angular/material';
import { ShowBookComponent } from './show-book/show-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [BooksComponent, ShowBookComponent, DeleteBookComponent, AddBookComponent],
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
  entryComponents: [ShowBookComponent,DeleteBookComponent,AddBookComponent]
})
export class BooksModule { }
