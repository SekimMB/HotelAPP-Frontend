import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private room_data;
  constructor() { }

  setData(data){
    this.room_data = data;
  }

  getData(){
    let temp = this.room_data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.room_data = undefined;
  }

}
