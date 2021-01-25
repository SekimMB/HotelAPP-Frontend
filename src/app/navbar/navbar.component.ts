import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookies:CookieService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("UserID");
    this.router.navigate(['/login']);
  }

  logcheck(){
    return localStorage.getItem("UserID")==null;
    // returns true if not logged in
  }

}
