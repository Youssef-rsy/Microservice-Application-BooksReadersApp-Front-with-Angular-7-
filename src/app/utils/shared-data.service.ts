import { Injectable, ɵConsole } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  isConnected=false;
  isAcredited=false;
   jwt:JwtHelperService = new JwtHelperService();
  constructor() { }
  public getToken(){
    return localStorage.getItem('token');
  }
  public saveToken(token:string){
    localStorage.setItem("token",token);
    let name = this.jwt.decodeToken(token);
    console.log(name);
    this.isConnected=true;
  }
  public userAccredited():boolean{
    let userJwt = this.jwt.decodeToken(this.getToken());
    for(let role of userJwt.roles){
      if(role.authority == "ADMIN"){
        return true;
      }
    }
    return false ;
  } ;

  public tokenIsPresent():boolean{
    if(this.getToken())
      return true;
    return false;
  }

  public deleteToken(){
    localStorage.removeItem("token");
    this.isConnected=false;
  }


}
