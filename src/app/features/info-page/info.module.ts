// modules //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
// components //
import { InfoPageComponent } from './info-comp/info-page.component';


@NgModule({
  declarations: [InfoPageComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
