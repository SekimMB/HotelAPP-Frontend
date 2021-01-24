import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public items$;

  constructor(
    private router:Router,
    private clientservice:ClientService,
    private formBuilder:FormBuilder
  ) { }



  filterForm = this.formBuilder.group({
    pricestart: ['',[Validators.pattern("^[0-9]*$"),]],
    priceend: ['',[Validators.pattern("^[0-9]*$"),]],
    size: ['',]
  });

  ngOnInit(): void {
    this.clientservice.getRooms().subscribe((response)=>{
      console.log(response)
      this.items$ = response;
    })
  }

  filter(){
    let filters = new filter();
    filters = this.filterForm.value;
    this.clientservice.getRoomsPriceRange(filters.pricestart,filters.priceend).subscribe((response)=>{
      console.log(response);
      this.items$ = response;
    })
  }

  reset(){
    this.clientservice.getRooms().subscribe((response)=>{
      console.log(response)
      this.items$ = response;
    })
  }
}

class filter{
  pricestart: number;
  priceend: number;
}
