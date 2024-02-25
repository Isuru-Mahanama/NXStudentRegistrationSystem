import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'angular-monorepo-app-getting-stu-email',
  templateUrl: './getting-stu-email.component.html',
  styleUrl: './getting-stu-email.component.css',
  imports: [CommonModule,FormsModule],
  standalone: true,
})
export class GettingStuEmailComponent {


  studentDetails: any; // Replace 'any' with the actual type of your data
  data :any;
  constructor(private router: ActivatedRoute, private logedInServices:LoginServiceService,private route:Router){

  }
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      // Access the data passed from the previous component
      this.data = window.history.state.data;
      
      // Now you can use the 'data' in your component
      console.log(this.data);
    });
  }
  GoToDashboard() {
    if(this.logedInServices.isLoggedIn){
      this.route.navigate(['dashboard']);
     }
        if(!this.logedInServices.isLoggedIn){
        this.route.navigate(['login']);
     }
    }
  
 }
