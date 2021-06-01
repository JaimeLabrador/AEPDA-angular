import { HomeService } from '../../shared/services/home-services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-comp/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderImagesComponent } from './home-comp/home-header-images/home-header-images.component';
import { HomeDescriptionComponent } from './home-comp/home-description/home-description.component';
import { HomeArticlesComponent } from './home-comp/home-articles/home-articles.component';


@NgModule({
  declarations: [HomePageComponent, 
    HomeHeaderImagesComponent, 
    HomeDescriptionComponent, 
    HomeArticlesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
