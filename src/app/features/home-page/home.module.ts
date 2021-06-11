// modules //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
// services //
import { HomeService } from '../../shared/services/home-services/home.service';
// components //
import { ArticleButtonComponent } from './../../shared/common-components/article-button/article-button.component';
import { HomePageComponent } from './home-comp/home-page.component';
import { HomeHeaderImagesComponent } from './home-comp/home-header-images/home-header-images.component';
import { HomeDescriptionComponent } from './home-comp/home-description/home-description.component';
import { HomeArticlesComponent } from './home-comp/home-articles/home-articles.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeHeaderImagesComponent,
    HomeDescriptionComponent,
    HomeArticlesComponent,
    ArticleButtonComponent
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
