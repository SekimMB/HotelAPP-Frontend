import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ClientService} from '../../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private service: ClientService, private router:Router) { }

  ngOnInit(): void {
  }
  updateForm = this.formbuilder.group({
    login: ['Templog',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    password: ['Temppas',[Validators.required,Validators.minLength(5)]],
    name: ['John',Validators.required],
    surname: ['Doe',[Validators.required,Validators.pattern('^[A-ZŻŹĆĄŚĘŁÓŃ]+[a-zżźćńółęąś]*')]],
    email: ['John@doe.com',[Validators.required,Validators.email]],
    bank_acc_number: ['33322211144',[Validators.required,Validators.pattern('^[0-9]{11}')]],
    phone: ['555885223',[Validators.required,Validators.pattern('^[0-9]{9}')]]
  });

  update (){
    let data = new UpdateClient();
    data = this.updateForm.value;
    this.service.update(<number>localStorage.getItem("UserID"),data).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['account']);
    })
  }
}
class UpdateClient{
  login: string;
  password: string;
  name: string;
  surname: string;
  email:string ;
  bank_acc_number : bigint;
  phone:string
}
