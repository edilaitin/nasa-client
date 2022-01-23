import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { LibraryResponse } from '../types';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  libraryResponse!: LibraryResponse;
  loading = false;
  searched = false
  value = '';

  constructor(private nasaApi: NasaApiService) { }
  
  onSearchChange(_: any) {
    this.nasaApi.searchImageLibrary(this.value).subscribe(libraryResponse => {      
      console.log(libraryResponse);
      
      this.libraryResponse = libraryResponse;
      this.loading = false;
      this.searched = true;
    });
  }

  ngOnInit(): void {
  }

}
