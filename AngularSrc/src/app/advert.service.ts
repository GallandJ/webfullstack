import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdvertAngular } from './models/advertangular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}


@Injectable()
export class AdvertService {

  socket = io('http://localhost:4000');
  apiUrl = 'http://localhost:3000/api/advert/';
  constructor(public http: HttpClient, public router : Router) { }

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
    console.log('id token dans le service' + localStorage.getItem('id_token'))

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': localStorage.getItem('id_token')
      });
    }

      console.log("la fonction delete est bien appellée");
      return this.http.delete(this.apiUrl+id,httpOptions).subscribe(res => {
        console.log("la fonction delete est passée");
        this.socket.emit('delete-advert', {message: 'advertDeleted'});
        this.router.navigateByUrl('');
        return res;
      }, (err) => {
        console.log('erreur 1');
        console.log(localStorage.getItem('id_token'));
        console.log(err);
      });
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
