import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ReservationService} from '../../../services/reservation.service';
import {DataService} from '../../../services/data.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  ID:string;

  constructor(private formBuilder: FormBuilder,private router:Router, private service:ReservationService,
              private dataservice: DataService) { }

  reservationForm = this.formBuilder.group({
    client_number: ['',[Validators.required]],
    room_number: ['',[Validators.required]],
    reservation_start: ['',Validators.required],
    reservation_end: ['',[Validators.required]],
  });

  ngOnInit(): void {

  }

  reserve (){
    let data = new Reservation();
    data = this.reservationForm.value;
    data.client_number=localStorage.getItem("UserID");
    data.roomb_number=this.dataservice.getData();
    this.service.reserve(data).subscribe((response)=>{
      console.log(response);
      this.dataservice.clearData();
      this.router.navigate(['reservation/success']);
    })
  }
}
class Reservation{
  client_number: string;
  roomb_number: string;
  reservation_start: string;
  reservation_end: string;
}
