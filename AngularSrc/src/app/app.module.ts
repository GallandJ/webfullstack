import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    AdvertDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
