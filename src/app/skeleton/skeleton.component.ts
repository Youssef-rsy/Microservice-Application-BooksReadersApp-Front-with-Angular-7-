import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { SharedDataService } from '../utils/shared-data.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private location: Location ,private router :Router,private sharedData:SharedDataService 
            , private logout:LoginService ) {}
  goBack(): void {
   this.location.back();
  }

  ngOnInit(){
    if(!this.sharedData.tokenIsPresent()){
      this.router.navigateByUrl('/login');
    }
  }
  logOut():void{
    this.sharedData.deleteToken();
    this.logout.logOut().subscribe(
      response=>{
        console.log("log out successfuly");
      },
      error=>{
        console.log("log out error")
      }
    );
    this.router.navigateByUrl("/login");
  }
}
