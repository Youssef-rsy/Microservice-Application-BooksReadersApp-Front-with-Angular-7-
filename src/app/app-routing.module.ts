import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books/books.component';
//import { AboutMeComponent } from './about/about-me/about-me.component';
import { ReadersComponent } from './readers/readers/readers.component';
import { AboutAppComponent } from './about/about-app/about-app.component';

const appRoutes : Routes = [
  { path: '',   redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutAppComponent },
  { path:'books' , component : BooksComponent},
  { path:'readers' , component : ReadersComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only),
    CommonModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
