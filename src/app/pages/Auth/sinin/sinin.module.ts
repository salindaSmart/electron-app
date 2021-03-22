import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SininRoutingModule } from './sinin-routing.module';
import {Router} from "@angular/router";
import { AuthService } from '../../../auth.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SininRoutingModule,
    HttpClientModule,
    HttpClient,
    Router,
    AuthService
  ]
})
export class SininModule { }
