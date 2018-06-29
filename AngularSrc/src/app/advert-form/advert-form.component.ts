import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdvertAngular } from '../models/advertangular';
import { AdvertService } from '../advert.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParameterCodec, HttpParams } from '@angular/common/http';




@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css']
})
export class AdvertFormComponent implements OnInit {

  advertForm: FormGroup;
  advert: any;
  paramsId: null;

  constructor(private fb: FormBuilder, private advertService: AdvertService, public route: ActivatedRoute, public router: Router, private http: HttpClient) {

/*
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
*/
  }

  ngOnInit(){
    this.createForm();
  }

  saveAdvert() {
    const headers = new HttpHeaders()
        .append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzNmY2YzNWU5ODk5MWRmMDUwYThkOSIsImlhdCI6MTUzMDIyMjk1OCwiZXhwIjoxNTMwMzA5MzU4fQ.bHGEV4JtBnmzFoZXB7oaHiW7UyfvSf95wgg0ftsx8Gk');
    const body = {
        title:  this.advert.title,
        price: this.advert.price,
        description: this.advert.description,
        localisation: this.advert.localisation
    }


    this.http.post('http://localhost:3000/api/advert/',body, {headers: headers})
      .subscribe(res => {
          console.log('requete lancée')
          let id = res['_id'];
          //this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log("requete down" + err);
        }
      );
  }

  createForm() {
  this.advertForm = this.fb.group({
    title: new FormControl('', [ Validators.minLength(5), Validators.maxLength(10)]),
    price: new FormControl('', [ Validators.min(0)]),
    description: new FormControl('', [ Validators.minLength(10), Validators.maxLength(500)]),
    localisation: new FormControl('', [ Validators.min(0)])
    });
  }

  onSubmit(){
    this.advert = this.prepareSaveAdvert();
    this.saveAdvert();
    console.log("advert updated");
  }

  prepareSaveAdvert(): AdvertAngular {
    const formModel = this.advertForm.value;

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveAdvert: AdvertAngular = {
      title: formModel.title as string,
      price: formModel.price as number,
      description: formModel.description as string,
      localisation: formModel.localisation as number
    }
    return saveAdvert;
  }
}
