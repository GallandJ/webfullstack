import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  public adverts;

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.getAdverts();
  }

  getAdverts(){
    this.advertService.getAdverts().subscribe(data=> {
      this.adverts = data;
    })
  }

}
