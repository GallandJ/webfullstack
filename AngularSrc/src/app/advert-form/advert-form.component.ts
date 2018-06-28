import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advert } from '../data-model';
import { AdvertService } from '../advert.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css']
})
export class AdvertFormComponent implements OnInit {

  advertForm: FormGroup;
  advert: any;
  paramsId: null;

  constructor(private fb: FormBuilder, private advertService: AdvertService, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      if(!params){
        this.paramsId = null;
        console.log("paramsId est null")
      }
      else{
        this.paramsId = params.id
        console.log("paramasId = " + this.paramsId)
      }
    });
    var advert = this.getAdvert(this.paramsId);

    if(this.advert.title != null){
      this.createForm(advert);

    }

  }

  ngOnInit() {

  }

  getAdvert(id){
    return this.advertService.getAdvert(id).subscribe(data => {
      this.advert = data;
    });
  }

  createForm(advert) {
  this.advertForm = this.fb.group({
    title: new FormControl(advert.title, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    price: new FormControl(advert.price, [Validators.required, Validators.min(0)]),
    description: new FormControl(advert.description, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
    localisation: new FormControl(advert.localisation, [Validators.required, Validators.min(0)])
    });
  }

  onSubmit(){
    this.advertService.updateAdvert(this.advert);
    console.log("advert updated");
  }
}
