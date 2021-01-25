import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../../../services/data.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public items$;
  public selectedValue;

  constructor(
    private router:Router,
    private clientservice:ClientService,
    private formBuilder:FormBuilder,
    private dataservice:DataService
  ) { }



  filterForm = this.formBuilder.group({
    pricestart: [null,[Validators.pattern("^[0-9]*$"),]],
    priceend: [null,[Validators.pattern("^[0-9]*$"),]],
  });

  sizes = [
    {value: null},
    {value: "Single", name : "Single"}, {value: "Double", name : "Double"}, {value: "Triple", name : "Triple"},
    {value: "Quad",name: "Quad"},{value: "King",name: "King"},{value: "Queen",name: "Queen"}
  ];

  ngOnInit(): void {
    this.clientservice.getRooms().subscribe((response)=>{
      console.log(response)
      this.items$ = response;
    })
  }

  filter(){
    let filters = new filter();
    filters = this.filterForm.value;
    if(filters.priceend!=null && filters.pricestart!=null && this.selectedValue==null){
    this.clientservice.getRoomsPriceRange(filters.pricestart,filters.priceend).subscribe((response)=>{
      console.log(response);
      this.items$ = response;
    })}
    if(filters.priceend==null && filters.pricestart==null && this.selectedValue!=null){
      this.clientservice.getRoomsSize(this.selectedValue).subscribe((response)=>{
        console.log(response);
        this.items$ = response;
      })}
    if(filters.priceend!=null && filters.pricestart!=null && this.selectedValue!=null){
      this.clientservice.getRoomsSizeRange(this.selectedValue,filters.pricestart,filters.priceend).subscribe((response)=>{
        console.log(response);
        this.items$ = response;
      })}
    if(filters.priceend==null && filters.pricestart!=null && this.selectedValue!=null){
      this.clientservice.getRoomsSizeStart(this.selectedValue,filters.pricestart).subscribe((response)=>{
        console.log(response);
        this.items$ = response;
      })}
    if(filters.priceend!=null && filters.pricestart==null && this.selectedValue!=null){
      this.clientservice.getRoomsSizeEnd(this.selectedValue,filters.priceend).subscribe((response)=>{
        console.log(response);
        this.items$ = response;
      })}
  }

  reset(){
    this.clientservice.getRooms().subscribe((response)=>{
      console.log(response)
      this.items$ = response;
      this.selectedValue=null;
    })
  }

  reserve(room_id){
    this.dataservice.setData(room_id);
    this.router.navigate(['reservation']);
  }

}

class filter{
  pricestart: number;
  priceend: number;
}
