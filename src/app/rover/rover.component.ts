import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { NasaApiService } from '../nasa-api.service';
import { RoverResponse } from '../types';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.sass']
})
export class RoverComponent implements OnInit {

  constructor(private nasaApi: NasaApiService) { }
  date = new FormControl(moment().subtract(1, 'days').set({hours: 0, minutes: 0, seconds: 0, milliseconds: 0}))
  maxDate = moment().subtract(1, 'days');
  loading = true;
  roverResponse!: RoverResponse;

  onDate(_: any) {
    this.loading = true;
    this.nasaApi.getMarsRoversLatestImages(this.date.value).subscribe(roverResponse => {
      this.roverResponse = roverResponse;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.nasaApi.getMarsRoversLatestImages(this.date.value).subscribe(roverResponse => {      
      this.roverResponse = roverResponse;
      this.loading = false;
    });
  }

}
