import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

import { AdvertService } from './advert.service';
import { AuthService } from './auth.service';
import { AdvertFormComponent } from './advert-form/advert-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    AdvertDetailsComponent,
    AdvertFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [AdvertService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
