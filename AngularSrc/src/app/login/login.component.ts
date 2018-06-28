import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advert } from '../data-model';
import { AuthService } from '../auth.service';
import {Router, ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormGroup, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
  }

  login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }

  ngOnInit() {
  }

}
