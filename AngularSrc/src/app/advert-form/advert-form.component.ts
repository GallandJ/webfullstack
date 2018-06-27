import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Advert } from '../data-models';
import { AdvertService } from '../advert.service';

@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css']
})
export class AdvertFormComponent implements OnInit {

  advertForm: FormGroup;

  constructor(private fb: FormBuilder, private advertService: AdvertService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
  this.advertForm = this.fb.group({
    title: new FormControl(this.Advert.title, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    price: '',
    description: '',
    localisation: ''
  });
}

}
