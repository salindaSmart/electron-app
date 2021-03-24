import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(email, password) {
    return this.http.post(AppConfig.url + 'api/login', {'email' : email, 'password' : password}).toPromise()
  }
}