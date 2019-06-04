import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AnguarMaterialModule } from './anguar-material/anguar-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTableModule } from '@angular/material';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';
import { AboutModule } from './about/about.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    LoginComponent,
   
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AnguarMaterialModule,
    FormsModule,
    BooksModule,
    ReadersModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
