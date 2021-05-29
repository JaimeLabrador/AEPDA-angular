import { TournamentPageComponent } from './tournament-comp/tournament-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorunamentRoutingModule } from './torunament-routing.module';


@NgModule({
  declarations: [TournamentPageComponent],
  imports: [
    CommonModule,
    TorunamentRoutingModule
  ]
})
export class TorunamentModule { }
