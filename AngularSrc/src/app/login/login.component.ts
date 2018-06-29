import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { UserAngular } from '../models/userangular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private fb:FormBuilder,
                 private authService: AuthService,
                 private router: Router) {
    this.loginForm = this.fb.group({
              email: ['',Validators.required],
              password: ['',Validators.required]
          });
  }

  login() {
    console.log('bite');
        const val = this.loginForm.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password);
        }
    }

    logout(){
      this.authService.logout();
    }

  ngOnInit() {
    this.logout();
  }

}
