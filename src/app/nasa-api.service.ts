import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AOPD, LibraryResponse, RoverResponse } from './types';

@Injectable({
  providedIn: 'root'
})


export class NasaApiService {
  API_KEY = '8wFyVVgzti64bgGAqxdtDglHA1xGxw02dLHomVhc';

  searchImageLibrary(text: string) {
    let queryParams = new HttpParams();
    // queryParams = queryParams.append("api_key", this.API_KEY);
    queryParams = queryParams.append("media_type", 'image');
    queryParams = queryParams.append("q", text);
    
    return this.http.get<LibraryResponse>(
      'https://images-api.nasa.gov/search',
      { params: queryParams }
    );
  }

  getMarsRoversLatestImages(date?: moment.Moment) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("api_key", this.API_KEY);
    if (date) {
      queryParams = queryParams.append("earth_date", date.format("YYYY-MM-DD"));
    }
    console.log(queryParams);
    
    return this.http.get<RoverResponse>(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      { params: queryParams }
    );
  }

  getImageOfTheDay(date?: moment.Moment) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("api_key", this.API_KEY);
    if (date) {
      queryParams = queryParams.append("date", date.format("YYYY-MM-DD"));
    }
    return this.http.get<AOPD>(
      'https://api.nasa.gov/planetary/apod',
      { params: queryParams }
    );
  }
  constructor(private http: HttpClient) { }
}