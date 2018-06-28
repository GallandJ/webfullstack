import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string ) {
        return this.http.post<User>('/api/auth/login', {email, password})
            // this is just the HTTP call,
            // we still need to handle the reception of the token
            .shareReplay();
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
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
