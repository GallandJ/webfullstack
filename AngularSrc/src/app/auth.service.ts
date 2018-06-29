import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAngular } from './models/userangular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import * as moment from "moment";


@Injectable()
export class AuthService {


  apiUrl = 'http://localhost:3000/api/auth/';
  constructor(public http: HttpClient, public router: Router) { }

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
            console.log('session setted');
            this.router.navigateByUrl('');
          },(err) => {
            console.log(err);
          });


  }

  private setSession(authResult) {
      localStorage.setItem('auth', authResult.auth);
      localStorage.setItem('id_token', authResult.token);
      console.log('id token logged '+ localStorage.id_token);
      //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      localStorage.removeItem("id_token");
      localStorage.setItem('auth',false);
    //  localStorage.removeItem("expires_at");
  }



  isLoggedOut() {
      return !this.isLoggedIn();
  }


}
