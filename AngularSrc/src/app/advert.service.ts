import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdvertAngular } from './models/advertangular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



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
    console.log(localStorage.getItem('id_token'))

    const headers = new HttpHeaders()
        .append('x-access-token': localStorage.getItem('token'));

    if(localStorage.auth==false){
      console.log('Vous ne pouvez pas supprimer une annonce si vous nêtes pas identifiés');
    }
    else{
      console.log("la fonction delete est appellée")
      return this.http.delete(this.apiUrl+id, {headers: headers}).subscribe(res => {
        console.log("la fonction delete est passée")
        return res;
      });


    }
    console.log("la fonction delete est appellée")
    return this.http.delete(this.apiUrl+id).subscribe(res => {
      console.log("la fonction delete est passée")
      return res;
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
