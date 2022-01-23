import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  links = ['apod', 'rover', 'library'];
  titles = ['Astronomy Picture of the Day', 'Mars Rover', 'Library'];
  activeLink = this.links[0];

  image: string = "assets/nasa_banner.png";

  title = 'nasa-client';
}
