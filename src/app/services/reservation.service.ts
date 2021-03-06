import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  reserve(data?:any){
    return this.http.post(this.url+'/reservation', data,{ responseType: 'text' });
  }

  cancel_reservation(id_reservation:number){
    return this.http.delete(this.url+'/reservation/'+id_reservation,{ responseType: 'text' });
  }

}
