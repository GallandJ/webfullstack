import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../advert.service';
import * as io from "socket.io-client";

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  adverts: any;
  socket = io('http://localhost:4000');

  constructor(private advertService: AdvertService, private http: HttpClient, private router: Router) {
    this.socket.on('new-advert', function (data) {

      this.adverts.push(data);
    }.bind(this));
  }

  ngOnInit() {
    this.getAdverts();
  }

  getAdverts(){
    return this.advertService.getAdverts().subscribe(data=> {
      console.log('ca marche');
      console.log(data);
      this.adverts = data;
    })
  }

}
