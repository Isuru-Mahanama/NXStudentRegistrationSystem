import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../../../apps/angular-monorepo/src/app/Category/Services/login-service.service';

@Component({
  selector: 'angular-monorepo-user-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css',
})
export class UserNavbarComponent {
  constructor(public logedInServices : LoginServiceService,private router:Router){}

  NaviagateToDashboard(){
    if(this.logedInServices.isLoggedIn){
   this.router.navigate(['userDashboard']);
   }
   if(!this.logedInServices.isLoggedIn){
     this.router.navigate(['login']);
   }
 }
 NaviagateToAbout() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['landingPage']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
NaviagateToLogin() {
  
  if(!this.logedInServices.isLoggedIn){
    this.router.navigate(['login']);
    this.logedInServices .loginNumber =1;
    
  }
}
NaviagateToLogOut() {
localStorage.removeItem('LoginToken');
this.logedInServices .loginNumber =0;
  this.router.navigate(['landingPage']);

}
NaviagateToTimeTable() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['viewTimeTable']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
NaviagateToCourseEnrollements() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['viewCourseEnrollement']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
}
