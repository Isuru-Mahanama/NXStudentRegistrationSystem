import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { LoginComponent } from 'libs/login/src/lib/login/login.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
