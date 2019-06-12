import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './User';


let AUTHENTIFICATION_SERVICE_LOGIN_URL:string = "https://proxymicroservice.herokuapp.com/login";
let AUTHENTIFICATION_SERVICE_LOGOUT_URL:string = "https://proxymicroservice.herokuapp.com/logout";
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
