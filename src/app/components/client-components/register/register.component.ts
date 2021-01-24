import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../../../services/client.service';


@Component({
  selector: 'app-register-client',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private service: ClientService, private router:Router) {}

  registerForm = this.formBuilder.group({
  login: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
  password: ['',[Validators.required,Validators.minLength(5)]],
  name: ['',Validators.required],
  surname: ['',[Validators.required,Validators.pattern('^[A-ZŻŹĆĄŚĘŁÓŃ]+[a-zżźćńółęąś]*')]],
  email: ['',[Validators.required,Validators.email]],
  bank_acc_number: ['',[Validators.required,Validators.pattern('^[0-9]{11}')]],
  phone: ['',[Validators.required,Validators.pattern('^[0-9]{9}')]]
  });

  ngOnInit(): void {
  }

  register (){
    let data = new RegisterClient();
    data = this.registerForm.value;
    this.service.register(data).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['register/success']);
    })
  }

}

class RegisterClient{
  login: string;
  password: string;
  name: string;
  surname: string;
  email:string ;
  bank_acc_number : bigint;
  phone:string
}
