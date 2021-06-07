import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-participants',
  templateUrl: './tournament-participants.component.html',
  styleUrls: ['./tournament-participants.component.scss']
})
export class TournamentParticipantsComponent implements OnInit {
  @Input() results: any;
  constructor() { }

  ngOnInit(): void {
  }

}
