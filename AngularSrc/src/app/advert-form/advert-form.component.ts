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
    this.getAdvert(this.paramsId);
  }

  ngOnInit() {
    this.getAdvert(this.paramsId);
    this.createForm();
  }

  getAdvert(id){
    return this.advertService.getAdvert(id).subscribe(data => {
      this.advert = data;
    });
  }

  createAdvert()

  createForm() {
  this.advertForm = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
    localisation: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit(){
    this.advert = this.prepareSaveAdvert();
    this.advertService.updateAdvert(this.advert).subscribe(err => {
      if(err){
        console.log(err);
      }
    });
    console.log("advert updated");
  }

  prepareSaveAdvert(): Advert {
    const formModel = this.advertForm.value;

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveAdvert: Advert = {
      title: formModel.title as string,
      price: formModel.name as number,
      description: formModel.description as string,
      localisation: formModel.localisation as number
    };
    return saveAdvert;
  }








}
