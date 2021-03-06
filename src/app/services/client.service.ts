import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:8080/api/client';

  constructor(private http:HttpClient) { }

  register(data?:any){
    return this.http.post(this.url+'/register', data);
  }

  update(ID:number,data?:any){
    return this.http.put('http://localhost:8080/api/update-registered/'+ID,data);
  }

  getLoggedUser(login:string, password:string){
    return this.http.get(this.url+'/login?login='+login+'&password='+password);
  }

  getLoggedUserDetails(id_client:number){
    return this.http.get('http://localhost:8080/api/logged-client/'+id_client);
  }

  deleteLoggedUser(id_client:number){
    return this.http.delete('http://localhost:8080/api/client/delete-registered/'+id_client);
  }

  getRooms(){
    return this.http.get(this.url+'/rooms');
  }
  getRoomsSize(size:string){
    return this.http.get(this.url+'/filterrooms-size?size='+size);
  }

  getRoomsPriceRange(pricestart: number, priceend: number){
    return this.http.get(this.url+'/filterrooms-range?pricestart='+pricestart+'&priceend='+priceend);
  }

  getRoomsSizeStart(size: string, pricestart: number){
    return this.http.get(this.url+'/filterrooms-sizestart?size='+size+'&pricestart='+pricestart);
  }

  getRoomsSizeEnd(size: string, priceend: number){
    return this.http.get(this.url+'/filterrooms-sizeend?size='+size+'&priceend='+priceend);
  }

  getRoomsSizeRange(size: string, pricestart: number, priceend: number){
    return this.http.get(this.url+'/filterrooms-sizerange?size='+size+'&pricestart='+pricestart+'&priceend='+priceend);
  }

  getActiveReservations(id_client){
    return this.http.get('http://localhost:8080/api/client/'+id_client+'/active-reservations');
  }


}
