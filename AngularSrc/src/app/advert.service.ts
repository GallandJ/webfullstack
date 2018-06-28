import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Advert } from './models/advert';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class AdvertService {

  apiUrl = 'http://localhost:3000/api/advert/';
  constructor(public http: HttpClient) { }

  getAdverts(){
    return this.http.get<Advert>(this.apiUrl).map(res => {
      return res;
    } );
  }

  getAdvert(id){
    return this.http.get<Advert>(this.apiUrl+id).map(res => {
      return res;
    });
  }

  deleteAdvert(id){
    return this.http.delete(this.apiUrl+id);
  }

  createAdvert(){

  }

  updateAdvert(advert: Advert): Observable<Advert>{
    return this.http.put<Advert>(this.apiUrl+advert.id, advert).map(res => {
      return res;
    })
  }

}
