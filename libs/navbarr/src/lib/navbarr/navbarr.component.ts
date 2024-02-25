import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { LoginServiceService } from '../../../../../apps/angular-monorepo/src/app/Category/Services/login-service.service';

@Component({
  selector: 'angular-monorepo-navbarr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbarr.component.html',
  styleUrl: './navbarr.component.css',
})
export class NavbarrComponent {
  
constructor(public logedInServices : LoginServiceService,private router:Router){}

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
NaviagateToScedulin() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['admin/scheduling']);
    }
    if(!this.logedInServices.isLoggedIn){
      this.router.navigate(['login']);
    }
}
NaviagateToCourseRegistration() {
  if(this.logedInServices.isLoggedIn){
    this.router.navigate(['admin/courseRegistration']);
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

  NaviagateToDashboard(){
    if(this.logedInServices.isLoggedIn){
   this.router.navigate(['dashboard']);
   }
   if(!this.logedInServices.isLoggedIn){
     this.router.navigate(['login']);
   }
 }
}
