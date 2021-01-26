import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accountdetail$;
  constructor(private router:Router,
              private clientservice:ClientService) { }

  ngOnInit(): void {
    this.clientservice.getLoggedUserDetails(<number>localStorage.getItem("UserID")).subscribe((response)=>{
      console.log(response);
      this.accountdetail$ = response;
    })
  }

  deleteUser() {
    if (window.confirm('Czy napewno chcesz usunąć konto ?')) {
      this.clientservice.deleteLoggedUser(<number> localStorage.getItem("UserID")).subscribe((response) => {
        console.log(response);
        localStorage.removeItem("UserID");
        this.router.navigate(['/']);
      })
    }

  }
}
