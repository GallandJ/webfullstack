import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

import { AdvertService } from './advert.service';
import { AdvertFormComponent } from './advert-form/advert-form.component'

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    AdvertDetailsComponent,
    AdvertFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
