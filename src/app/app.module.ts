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
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    LoginComponent,

  ],
  imports: [

    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AnguarMaterialModule,
    FormsModule,
    BooksModule,
    ReadersModule,
    AboutModule,
    JwtModule.forRoot({
      config: {
        //This function is used to customize how JwtModule gets the JWT access token from the local storage.
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('token');},
        //In this array, you can add any domains that are allowed to receive the JWT like public APIs.
        whitelistedDomains: ['https://proxymicroservice.herokuapp.com/'],
        //In this array, you can add routes that are not allowed to receive the JWT token.
        blacklistedRoutes: ['https://proxymicroservice.herokuapp.com/login']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
