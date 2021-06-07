import { Component, Input, OnInit } from '@angular/core';
import { Itournament } from '../../tournament-models/itournament';
import { TournamentService } from 'src/app/shared/services/tournament-services/tournament.service';

@Component({
  selector: 'app-tournament-description',
  templateUrl: './tournament-description.component.html',
  styleUrls: ['./tournament-description.component.scss']
})
export class TournamentDescriptionComponent implements OnInit {
  @Input() results!: Itournament;

  public loader = false;
  public displayParticipant = true;
  public response: any;

  constructor(public tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.getParticipants();
  }

  public getParticipants(): void{
    this.loader = true;

    this.tournamentService.getParticipants().subscribe((data) => {
      this.response = data;
      this.loader = false;
    })
  }

  public showParticipants(): void{
    this.displayParticipant = !this.displayParticipant;
  }

  public loadParticipant(): void {
    this.getParticipants();
  }

}
