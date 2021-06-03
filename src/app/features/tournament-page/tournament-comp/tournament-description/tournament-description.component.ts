import { Component, Input, OnInit } from '@angular/core';
import { Itournament } from '../../tournament-models/itournament';

@Component({
  selector: 'app-tournament-description',
  templateUrl: './tournament-description.component.html',
  styleUrls: ['./tournament-description.component.scss']
})
export class TournamentDescriptionComponent implements OnInit {
  @Input() results!:Itournament
  public displayRules:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  public showRules(){
    this.displayRules=!this.displayRules
  }
}
