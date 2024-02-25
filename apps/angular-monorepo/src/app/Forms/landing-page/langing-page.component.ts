import { Component } from '@angular/core';
import { LoginServiceService } from '../../Category/Services/login-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'angular-monorepo-app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.css',
  imports: [CommonModule,FormsModule],
  standalone: true,
})
export class LangingPageComponent {
  constructor(private logedInServices :LoginServiceService,
              private router:Router){}
  NaviagateToDashboard(){
     this.router.navigate(['login']);
 }
}
