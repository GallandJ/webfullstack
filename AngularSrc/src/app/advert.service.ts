import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advert } from './models/advert';

@Injectable({
  providedIn: 'root'
})


export class AdvertService {

  apiUrl = 'http://localhost:3000/api/advert';
  constructor(public http: HttpClient) { }

  getAdverts(){
    return this.http.get(this.apiUrl);
  }

}
