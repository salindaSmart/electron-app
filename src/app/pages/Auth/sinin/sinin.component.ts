import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-sinin',
  templateUrl: './sinin.component.html',
  styleUrls: ['./sinin.component.scss']
})
export class SininComponent implements OnInit {
private username;
private password;
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.validate(this.username, this.password)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['home']);

    })
}
}
