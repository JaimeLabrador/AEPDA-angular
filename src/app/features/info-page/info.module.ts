import { InfoPageComponent } from './info-comp/info-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';


@NgModule({
  declarations: [InfoPageComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
