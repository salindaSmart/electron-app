import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SininComponent } from './pages/Auth/sinin/sinin.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { SininRoutingModule } from './pages/Auth/sinin/sinin-routing.module';
import {HomeComponent} from '../app/home/home.component'

import { AuthGuardService as AuthGuard } from './auth-guard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'login',
    component: SininComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    SininRoutingModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
