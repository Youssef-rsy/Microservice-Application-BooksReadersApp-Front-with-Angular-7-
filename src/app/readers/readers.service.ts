import { Injectable } from '@angular/core';
import { Reader } from './reader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../books/book';

let READER_SERVICE_URL:string = "http://localhost:8888/readers/reader";

@Injectable({
  providedIn: 'root'
})
export class ReadersService {

  constructor(private http:HttpClient) { }

  public addReader(reader:Reader):Observable<Reader>{
    let url = READER_SERVICE_URL;
    return this.http.post<Reader>(url,reader);
  }

  public findAllReaders():Observable<Reader[]>{
    let url = READER_SERVICE_URL;
    return this.http.get<Reader[]>(url);
  }

  public getReader(reader:string):Observable<Reader>{
    let url = READER_SERVICE_URL+"/"+reader;
    return this.http.get<Reader>(url);
  }

  public deleteReader(readerId:string):any{
    let url = READER_SERVICE_URL+"/"+readerId;
    return this.http.delete(url);
  }
  public getBookInformation(title:string):Observable<Book>{
    let url = READER_SERVICE_URL+"/book/"+title;
    return this.http.get<Book>(url);
  }
  public getAuthorBook(author:string):Observable<Book>{
    let url = READER_SERVICE_URL+"/book/author/"+author;
    return this.http.get<Book>(url);
  }
}
