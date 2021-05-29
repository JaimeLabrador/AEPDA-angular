import { LeaguePageComponent } from './league-comp/league-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';


@NgModule({
  declarations: [LeaguePageComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
