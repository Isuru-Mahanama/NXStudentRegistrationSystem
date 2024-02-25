import { Route } from '@angular/router';
import { LangingPageComponent } from '../app/Forms/landing-page/langing-page.component';
import { CourseRegistrationComponent } from './Forms/Course-registration/course-registration.component';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { GettingStuEmailComponent } from './Forms/getting-stu-email/getting-stu-email.component';
import { CourseEnrollemtComponent } from './Forms/course-enrollemt/course-enrollemt.component';
import { AllCoursesComponent } from './Forms/all-courses/all-courses.component';
import { AllStudentsComponent } from './Forms/all-students/all-students.component';
import { AllSchedulesComponent } from './Forms/all-schedules/all-schedules.component';
import { TimeTableComponent } from './Forms/time-table/time-table.component';
import { MyProfileComponent } from './Forms/my-profile/my-profile.component';
import { ScedulingComponent } from './Forms/sceduling/sceduling.component';
export const appRoutes: Route[] = [
      {
        path: 'login',
        loadComponent: () =>
          import('@angular-monorepo/login').then((m) => m.LoginComponent),
      },
      {
        path:'landingPage',
        component:LangingPageComponent
      },
      {
        path:'admin/courseRegistration',
        component : CourseRegistrationComponent
      },
      {
        path:'',
        redirectTo :'landingPage',
        pathMatch: 'full'
      },
      {
        path: 'userDashboard',
        loadComponent: () =>
          import('@angular-monorepo/user-dashboard').then((m) => m.UserDashboardComponent)
      },
      {
        path:'admin/personalDetails',
        component : PersonalDetailsFormComponent
      },
      {
        path:'admin/gettingstudentdetails',
        component : GettingStuEmailComponent
      },
     
      {
        path:'admin/scheduling',
        component: ScedulingComponent
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@angular-monorepo/dashboard').then((m) => m.DashboardComponent)
      },
      {
        path:'myProfile',
        component: MyProfileComponent
      },
      {
        path:'viewTimeTable',
        component:TimeTableComponent
      },
      {
        path:'viewAllSchedule',
        component: AllSchedulesComponent
      },
      {
        path:'viewAllStudents',
        component: AllStudentsComponent
      },
      {
        path:'viewAllCourses',
        component: AllCoursesComponent
      },
      {
        path:'viewCourseEnrollement',
        component: CourseEnrollemtComponent
      },
      {
          path:'**',
          component:LangingPageComponent
      }
];
