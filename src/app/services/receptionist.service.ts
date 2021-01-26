import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  private url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  checkIn(id_client: number, id_room: number){
    return this.http.put(this.url+'/receptionist/check-in?id_client='+id_client+'&id_room='+id_room,{},{responseType:'text'});
  }

  checkOut(id_client: number, id_room: number){
    return this.http.put(this.url+'/receptionist/check-out?id_client='+id_client+'&id_room='+id_room,{},{responseType:'text'});
  }
}
