import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/shared/services/tournament-services/tournament.service';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss']
})
export class TournamentPageComponent implements OnInit {

  public response: any

  constructor(private tournamentService:TournamentService) { }

  ngOnInit(): void {
    this.getTournament()
  }

  public getTournament(){
    this.tournamentService.getTournament().subscribe((data)=>{
      this.response=data
    })
  }
}
