import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth;
  isConnected;
  unaithorize=false;
  errorMessage;
  user:User;
  constructor(private service:LoginService,private router: Router,private sharedData :SharedDataService) { }

  ngOnInit() {
    console.log("-------------");
    this.isConnected = this.sharedData.isConnected;
    console.log(this.isConnected);
  }

  authentification(val){
    this.service.logIn(val).subscribe(
      resp=>{
      this.sharedData.saveToken(resp.headers.get('Authorization'));
       this.router.navigateByUrl('/booksReadersApp/about');
      },
      error=>{
        this.unaithorize=true;
      });
  }
  

}
