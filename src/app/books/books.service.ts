import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { SharedDataService } from '../utils/shared-data.service';

let BOOK_SERVICE_URL:string = "https://proxymicroservice.herokuapp.com/books/book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient,private sharedData:SharedDataService ) { }

  public isUserAccredited():boolean{
    return this.sharedData.userAccredited();
  }
  public saveBook(book:Book ):Observable<Book>{  
    let url = BOOK_SERVICE_URL;
    return this.http.post<Book>(BOOK_SERVICE_URL,book);
  };

	public getBook(bookId:string): Observable<Book>{
    let url = BOOK_SERVICE_URL+"/"+bookId;
    return this.http.get<Book>(url);
  };

	public findAllBook(): Observable<HttpResponse<Book[]>> { 
    /*console.log('###############################');
    this.http.get<HttpResponse<Book[]>>(BOOK_SERVICE_URL).subscribe(data=>{
      console.log(data);
    });
    console.log('###############################')*/
    return this.http.get<HttpResponse<Book[]>>(BOOK_SERVICE_URL);
  };

	public updateBook(bookId:string , book:Book){ 

  };

	public deleteBook(bookId:string): Observable<any>{ 
    let url = BOOK_SERVICE_URL+"/"+bookId;
    console.log(url);
     return this.http.delete(url);

  };

	public findBookByTitle(title:string){ 
    let url = BOOK_SERVICE_URL+"/title/"+title;
    return this.http.get<Book>(url);
  };

	public findBookByAuthor(author:string){  
    let url = BOOK_SERVICE_URL+"/author/"+author;
    return this.http.get<Book>(url);
  };

  
	


}
