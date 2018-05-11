import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { HomeComponent } from '../components/home/home.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import { ClinicComponent } from '../components/clinic/clinic.component';
import { DonateComponent } from '../components/donate/donate.component';
import { NewsComponent } from '../components/news/news.component';
import { MediaComponent } from '../components/media/media.component';
import { InitiativeComponent } from '../components/initiative/initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    ClinicComponent,
    DonateComponent,
    NewsComponent,
    MediaComponent,
    InitiativeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
