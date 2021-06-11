// modules //
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorunamentRoutingModule } from './torunament-routing.module';
import { HttpClientModule } from '@angular/common/http';
// components //
import { TournamentDescriptionComponent } from './tournament-comp/tournament-description/tournament-description.component';
import { TournamentInscriptionComponent } from './tournament-comp/tournament-description/tournament-inscription/tournament-inscription.component';
import { TournamentRulesComponent } from './tournament-comp/tournament-rules/tournament-rules.component';
import { TournamentParticipantsComponent } from './tournament-comp/tournament-description/tournament-participants/tournament-participants.component';
import { TournamentPageComponent } from './tournament-comp/tournament-page.component';
// services //
import { TournamentService } from 'src/app/shared/services/tournament-services/tournament.service';

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
  providers: [
    TournamentService
  ]
})
export class TorunamentModule { }
