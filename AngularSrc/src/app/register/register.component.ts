import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { UserAngular } from '../models/userangular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: any;



  constructor(private fb: FormBuilder, private authService: AuthService, public route: ActivatedRoute, public router: Router, public http: HttpClient) { }

  createForm() {
  this.registerForm = this.fb.group({
    name: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    email: new FormControl('', [ Validators.required, Validators.email]),
    password: new FormControl('', [ Validators.required, Validators.minLength(10), Validators.maxLength(500)])
    });
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
    this.user = this.prepareNewUser();
    this.authService.newUser(this.user);
  }

  prepareNewUser(): UserAngular {
    const formModel = this.registerForm.value;
    const newUser: UserAngular = {
      name: formModel.name as string,
      email: formModel.email as string,
      password: formModel.password as string
    }
    return newUser;
  }

}
