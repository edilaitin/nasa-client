import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { NasaApiService } from '../nasa-api.service';
import { AOPD } from '../types';

@Component({
  selector: 'app-astro-picture',
  templateUrl: './astro-picture.component.html',
  styleUrls: ['./astro-picture.component.sass']
})
export class AstroPictureComponent implements OnInit {

  constructor(private nasaApi: NasaApiService) { }
  date = new FormControl(moment().set({hours: 0, minutes: 0, seconds: 0, milliseconds: 0}))
  maxDate = moment();
  loading = true;
  
  aopd!: AOPD;

  onDate(_: any) {
    this.loading = true;
    this.nasaApi.getImageOfTheDay(this.date.value).subscribe(aopd => {
      this.aopd = aopd;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.nasaApi.getImageOfTheDay().subscribe(aopd => {
      this.aopd = aopd;
      this.loading = false;
    });
  }

}
