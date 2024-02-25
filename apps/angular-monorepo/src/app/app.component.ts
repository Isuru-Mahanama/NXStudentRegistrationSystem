import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginServiceService } from './Category/Services/login-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarServiceService } from './Category/Services/navbar-service.service';
import {NavbarrComponent} from '@angular-monorepo/navbarr'
import { CommonModule } from '@angular/common';
import {UserNavbarComponent} from '@angular-monorepo/user-navbar';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { PersaonalDetailsService } from './Category/Services/persaonal-details.service';
import { CourseDetailsServicesService } from './Category/Services/course-details-services.service';
import { ScheduleServicesService } from './Category/Services/schedule-services.service';
import { EnrollementServicesService } from './Category/Services/enrollement-services.service';



@Component({
  standalone: true,
  imports: [NxWelcomeComponent, 
            RouterModule,
            HttpClientModule,
            NavbarrComponent,
            CommonModule,
            UserNavbarComponent,
            FormsModule,
            ],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[LoginServiceService,
             HttpClient,
             PersaonalDetailsService,
             CourseDetailsServicesService,
             ScheduleServicesService,
            EnrollementServicesService]
})
export class AppComponent {
  title = 'angular-monorepo';
  constructor(private navbarServices : NavbarServiceService){

  }
  ShowNavbar():any {
    return  localStorage.getItem('navbar');
  }
}
