import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAngular } from './models/userangular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as moment from "moment";


@Injectable()
export class AuthService {


  apiUrl = 'http://localhost:3000/api/auth/';
  constructor(public http: HttpClient) { }

  newUser(user){
    return this.http.post<UserAngular>(this.apiUrl+'register', user).subscribe(res => {
      console.log('user enregistré');
    }, (err) => {
      console.log(err);
    })
  }

  login(email:string, password:string ) {

      return this.http.post<UserAngular>(this.apiUrl+'login', {email, password})
          .subscribe(res => {

            this.setSession(res);
          },(err) => {
            console.log(err);
          });


  }

  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('auth', authResult.auth);
      localStorage.setItem('id_token', authResult.token);
      console.log('id token logged'+ localStorage.id_token);
      //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      localStorage.removeItem("id_token");
    //  localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }

}
