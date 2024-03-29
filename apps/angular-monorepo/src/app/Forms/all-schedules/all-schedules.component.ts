import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';
import { schedulingIDRequest } from '../../Category/models/schedulingID';
import { ScheduleServicesService } from '../../Category/Services/schedule-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'angular-monorepo-app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrl: './all-schedules.component.css',
  imports: [CommonModule,FormsModule],
  standalone: true,
})
export class AllSchedulesComponent {

NavigateToDelete(scheduleID: number) {
  console.log(scheduleID)
  const apiUrl = `https://localhost:7061/api/Schedule/admin/getScheduleDelete?scheduleID=${scheduleID}`;

  this.http.delete(apiUrl).subscribe(
    (response) => {      
      console.log('API Response:', response);
      window.location.reload();

    },
    (error) => {
      // Handle errors here
      console.error('API Error:', error);
    }
  );
}
NavigateToUpdate(scheduleID:number) {
  console.log(scheduleID)
  this.scheduleServices.someIntVariable = 1;
  this.router.navigate(['admin/scheduling', { scheduleID: scheduleID }]);
}

  model : schedulingIDRequest[]
  constructor(private http : HttpClient,
              private logginServices: LoginServiceService,
              private router :Router,
              private scheduleServices:ScheduleServicesService){
      this.model = [];
  }
  scheduleData: Observable<schedulingIDRequest[]> | undefined;
  ngOnInit(){
    this.scheduleData = this.viewCourse();
    this.scheduleData.subscribe(schedule => {

    console.log("Schedule", schedule);
    this.model = schedule;
  });
  }
  viewCourse(): Observable<schedulingIDRequest[]> {
     return this.http.get<schedulingIDRequest[]>('https://localhost:7061/api/Schedule/GetAllSchedules').pipe(
      map(data => {
        
        console.log(data); // This should log the data after the HTTP request is complete
        return data; // Return the data part
      })
    );
  }

  NavigateToDahsboard() {
    if(this.logginServices.isLoggedIn){
      this.router.navigate(['dashboard']);
    }
    if(!this.logginServices.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
  getAmPmIndicator(startTime: string): string {
    const startTimeDate = this.convertToTime(startTime);
    return startTimeDate.getHours() < 12 ? 'a.m' : 'p.m';
  }
  convertToTime(dateString: string): Date {
    const [hours, minutes] = dateString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  }
}
