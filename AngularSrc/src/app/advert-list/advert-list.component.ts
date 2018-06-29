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
      this.socket.on('delete-advert', function(data) {
      this.getAdverts();
    }.bind(this);
  }

  ngOnInit() {
    this.getAdverts();
    console.log(this.adverts);
    console.log('local storage token ' + localStorage.getItem('id_token'));
  }

  getAdverts(){
    return this.advertService.getAdverts().subscribe(data=> {
      console.log(data);
      this.adverts = data;
    })
  }

}
