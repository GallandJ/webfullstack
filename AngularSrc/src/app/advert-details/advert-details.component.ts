import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../advert.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  advertId;
  advert;

  constructor(private route: ActivatedRoute, private advertService: AdvertService) {
    this.route.params.subscribe( params => this.advertId = params.id);
  }

  ngOnInit() {
    //this.route.params.subscribe( params => this.advertId = params.id) );
    this.getAdvert(this.advertId);
    console.log(this.advert);
  }

  getAdvert(id){
    return this.advertService.getAdvert(id).subscribe(data=> {
      this.advert = data;
    });
  }

  deleteAdvert(id){

  }

}
