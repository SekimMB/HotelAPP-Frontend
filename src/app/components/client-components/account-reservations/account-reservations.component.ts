import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ReservationService} from '../../../services/reservation.service';
import {ReceptionistService} from '../../../services/receptionist.service';

@Component({
  selector: 'app-account-reservations',
  templateUrl: './account-reservations.component.html',
  styleUrls: ['./account-reservations.component.css']
})
export class AccountReservationsComponent implements OnInit {

  items$;
  constructor(private reservationservice:ReservationService,
              private clientservice:ClientService, private receptionistservice:ReceptionistService) { }

  ngOnInit(): void {
    this.clientservice.getActiveReservations(localStorage.getItem("UserID")).subscribe((response)=>{
      console.log(response);
      this.items$=response;
    })
  }

  Cancel(id_reservation,id_room){
    this.receptionistservice.checkOut(<number>localStorage.getItem("UserID"),id_room).subscribe((response)=>{
      console.log(response);});
    this.reservationservice.cancel_reservation(id_reservation).subscribe((response)=>{
      console.log(response);
      this.ngOnInit();
    });
  }

}
