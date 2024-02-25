import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginDetailsRequest } from '../../../../../apps/angular-monorepo/src/app/Category/models/login';
import { LoginServiceService } from '../../../../../apps/angular-monorepo/src/app/Category/Services/login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppComponent } from '../../../../../apps/angular-monorepo/src/app/app.component';
import { jwtDecode } from 'jwt-decode';
import { EmailValidator } from '@angular/forms';
import { NavbarServiceService } from '../../../../../apps/angular-monorepo/src/app/Category/Services/navbar-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'angular-monorepo-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  model : LoginDetailsRequest;
  tokenMessage: any;
  constructor( 
        private loginServiceService : LoginServiceService, 
        private router:Router, 
        private httpClient :HttpClient,
        private navbarServices:NavbarServiceService
      ) {
    this.model = {
    email:'',
    passwordHash:''
    
    };
  }

   validateEmail(email : string) {
    // Regular expression for a valid email address ending with "example.com"
    const emailRegex = /^[a-zA-Z0-9._-]+@example\.com$/;
  
    return emailRegex.test(email);
  }
  onFormSubmit(){
      this.tokenMessage = '';
      this.loginServiceService.addLoginDetails(this.model)
      .subscribe({      
      next : (response : any) =>{
        console.log(JSON.parse(response).userType);
        console.log("This was successfull");
        console.log(JSON.parse(response).token)
        this.tokenMessage = JSON.parse(response).token;
        localStorage.setItem('LoginToken',response);
        this.loginServiceService.loginNumber =1;
     
       if(this.loginServiceService.isLoggedIn){
        if(JSON.parse(response).userType !== undefined && JSON.parse(response).userType === 1){
          this.router.navigate(['dashboard']);
          this.navbarServices.adminNavbar = true;
          localStorage.setItem('navbar', 'true');
        }
        else{
         this.router.navigate(['userDashboard']);
         this.navbarServices.adminNavbar = false;
         localStorage.setItem('navbar','false');

          }
       }

       if(!this.loginServiceService.isLoggedIn){
        console.log("Login again. token expired")
       }
       
      },
      error: (error) =>{
        console.log(error);
      }
    })   
  }
}
