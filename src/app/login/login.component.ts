import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth;
  unaithorize=false;
  errorMessage;
  user:User;
  constructor(private service:LoginService) { }

  ngOnInit() {
  }

  authentification(val){
    this.service.logIn(val).subscribe(
      resp=>{
       this.service.saveToken(resp.headers.get('Authorization'));
      },
      error=>{
        this.unaithorize=true;
      });
  }
  

}
