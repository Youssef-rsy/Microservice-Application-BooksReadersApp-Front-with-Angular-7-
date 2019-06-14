import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books/books.component';
//import { AboutMeComponent } from './about/about-me/about-me.component';
import { ReadersComponent } from './readers/readers/readers.component';
import { AboutAppComponent } from './about/about-app/about-app.component';
import { LoginComponent } from './login/login.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'booksReadersApp', component: SkeletonComponent , children:[
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutAppComponent },
    { path:'books' , component : BooksComponent},
    { path:'readers' , component : ReadersComponent},
  ] },
 
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }), // <-- debugging purposes only),
    CommonModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
