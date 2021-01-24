import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ClientService} from '../../../services/client.service';
import {stringify} from 'querystring';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  loginFailed = false;
  temporaryId =''

  constructor(
    private cookies:CookieService,
    private router:Router,
    private clientservice:ClientService
  ) { }

  ngOnInit(): void {

  }

  login() {
    this.clientservice.getLoggedUser(this.username, this.password).subscribe((response)=>{

        localStorage.setItem("UserID",<string>response);
        console.log(response);
        this.router.navigate(['/']);
  },
(err)=>{this.loginFailed = true;});
}

}
