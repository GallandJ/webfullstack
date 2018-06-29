import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdvertAngular } from './models/advertangular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzNmY2YzNWU5ODk5MWRmMDUwYThkOSIsImlhdCI6MTUzMDIyMjk1OCwiZXhwIjoxNTMwMzA5MzU4fQ.bHGEV4JtBnmzFoZXB7oaHiW7UyfvSf95wgg0ftsx8Gk'
  })
};

@Injectable()


export class AdvertService {

  apiUrl = 'http://localhost:3000/api/advert/';
  constructor(public http: HttpClient) { }

  getAdverts(){
    return this.http.get<AdvertAngular>(this.apiUrl).map(res => {
      return res;
    } );
  }

  getAdvert(id){
    return this.http.get<AdvertAngular>(this.apiUrl+id).map(res => {
      return res;
    });
  }

  deleteAdvert(id){
    return this.http.delete(this.apiUrl+id);
  }

  createAdvert(advert: AdvertAngular){
    console.log("on viens jusque la");
    return this.http.post<AdvertAngular>(this.apiUrl,advert
    ,httpOptions).map(res => {
      return res;
    })
  }
/*
  updateAdvert(advert: Advert)/*: Observable<Advert>{
    console.log('udpateAdvert advert service : ' + advert);
    return this.http.put<Advert>(this.apiUrl+advert.id, {
      title: advert.title,
      price: advert.price,
      description: advert.description,
      localisation: advert.localisation
    }).map(res => {
      return res;
    })
  }
*/

}
