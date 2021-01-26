import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ReservationService} from '../../../services/reservation.service';
import {DataService} from '../../../services/data.service';
import {ReceptionistService} from '../../../services/receptionist.service';





@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {



  constructor(private formBuilder: FormBuilder,private router:Router, private service:ReservationService,
              private dataservice: DataService, private receptionist:ReceptionistService) {}

  reservationForm = this.formBuilder.group({
    id_client: ['',[Validators.required]],
    id_room: ['',[Validators.required]],
    start_date: ['',Validators.required],
    end_date: ['',[Validators.required]],
  });

  ngOnInit(): void {

  }

  reserve(){
    let data = new Reservation();
    data = this.reservationForm.value;
    data.id_client=parseInt(localStorage.getItem("UserID"));

    data.id_room=<number>this.dataservice.getData();
    console.log(data);
    this.service.reserve(data).subscribe((response)=>{
      console.log(response);
      this.receptionist.checkIn(data.id_client,data.id_room);
      this.router.navigate(['reservation/success']);
    })
    this.receptionist.checkIn(data.id_client,data.id_room).subscribe((response)=>{
      console.log(response);})
  }
  cancel_reservation(){
    let data = new Reservation();
    data = this.reservationForm.value;
    data.id_client=parseInt(localStorage.getItem("UserID"));
    data.id_room=<number>this.dataservice.getData();
    this.receptionist.checkOut(data.id_client,data.id_room).subscribe((response)=>{
      console.log(response);})
  }

}
class Reservation{
  id_client: number;
  id_room: number;
  reservation_start: string;
  reservation_end: string;
}
