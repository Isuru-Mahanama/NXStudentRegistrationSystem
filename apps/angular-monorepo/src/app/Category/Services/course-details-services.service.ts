import { Injectable } from '@angular/core';
import { schedulingRequest } from '../models/scheduling';
import { CourseDetailsRequest } from '../models/corseDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsServicesService {
  addCourseDetails(model:CourseDetailsRequest):Observable<any>{
    return this.http.post<any>(' https://localhost:7061/api/Course/admin/course', model)
  } 

  constructor(private http : HttpClient) { }

  updateCourseDetails(model:CourseDetailsRequest):Observable<any>{
    return this.http.put<any>(' https://localhost:7061/api/Course/admin/updateCourseDetails', model)
  }
}
