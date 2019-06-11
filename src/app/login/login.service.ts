import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

let AUTHENTIFICATION_SERVICE_LOGIN_URL:string = "http://localhost:8888/login";//"https://proxymicroservice.herokuapp.com/login";
let AUTHENTIFICATION_SERVICE_LOGOUT_URL:string = "http://localhost:8888/logout";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public logIn(user:User){
   return this.http.post<any>(AUTHENTIFICATION_SERVICE_LOGIN_URL,user,{observe:'response'})
  }
  
 
  public logOut(){
    return this.http.post<any>(AUTHENTIFICATION_SERVICE_LOGOUT_URL,{observe:'response'})
  }
}
