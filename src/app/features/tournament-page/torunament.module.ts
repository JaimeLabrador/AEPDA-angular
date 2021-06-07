import { ReactiveFormsModule } from '@angular/forms';
import { TournamentPageComponent } from './tournament-comp/tournament-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorunamentRoutingModule } from './torunament-routing.module';
import { TournamentService } from 'src/app/shared/services/tournament-services/tournament.service';
import { HttpClientModule } from '@angular/common/http';
import { TournamentDescriptionComponent } from './tournament-comp/tournament-description/tournament-description.component';
import { TournamentInscriptionComponent } from './tournament-comp/tournament-description/tournament-inscription/tournament-inscription.component';
import { TournamentRulesComponent } from './tournament-comp/tournament-rules/tournament-rules.component';
import { TournamentParticipantsComponent } from './tournament-comp/tournament-description/tournament-participants/tournament-participants.component';


@NgModule({
  declarations: [
    TournamentPageComponent, 
    TournamentDescriptionComponent, 
    TournamentInscriptionComponent, 
    TournamentRulesComponent, TournamentParticipantsComponent
  ],
  imports: [
    CommonModule,
    TorunamentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    TournamentService
  ]
})
export class TorunamentModule { }
