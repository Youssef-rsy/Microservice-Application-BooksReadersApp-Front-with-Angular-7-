import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

let AUTHENTIFICATION_SERVICE_URL:string = "http://localhost:8888/login";//"https://proxymicroservice.herokuapp.com/login";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public logIn(user:User){
   return this.http.post<any>(AUTHENTIFICATION_SERVICE_URL,user,{observe:'response'})
  }
  
  public saveToken(token:string){
    localStorage.setItem("token",token);
  }
  public logOut(){

  }
}
