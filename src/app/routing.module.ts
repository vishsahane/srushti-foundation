import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';

import { ClinicComponent } from '../components/clinic/clinic.component';
import { DonateComponent } from '../components/donate/donate.component';
import { NewsComponent } from '../components/news/news.component';
import { MediaComponent } from '../components/media/media.component';
import { InitiativeComponent } from '../components/initiative/initiative.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clinic', component: ClinicComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'news', component: NewsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'initiative', component: InitiativeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
