import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AstroPictureComponent } from './astro-picture/astro-picture.component';
import { HttpClientModule } from '@angular/common/http';
import { RoverComponent } from './rover/rover.component';
import { LibraryComponent } from './library/library.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,

    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    // MatNativeDateModule,

    LazyLoadImageModule,
    RouterModule.forRoot([
      { path: '', component: AstroPictureComponent },
      { path: 'apod', component: AstroPictureComponent },
      { path: 'rover', component: RoverComponent },
      { path: 'library', component: LibraryComponent },

    ]),
  ],
  declarations: [
    AppComponent,
    AstroPictureComponent,
    RoverComponent,
    LibraryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
