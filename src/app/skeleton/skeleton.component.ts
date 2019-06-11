import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private location: Location ,private router :Router,private sharedData:SharedDataService , private logout:LoginService) {}
  goBack(): void {
   this.location.back();
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
