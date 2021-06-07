import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentService } from 'src/app/shared/services/tournament-services/tournament.service';

@Component({
  selector: 'app-tournament-inscription',
  templateUrl: './tournament-inscription.component.html',
  styleUrls: ['./tournament-inscription.component.scss']
})
export class TournamentInscriptionComponent implements OnInit {

  @Output() newParticipantEvent = new EventEmitter<void>();

  public signForm: FormGroup;
  public submitted = false;
  public user!: any;

  constructor(public tournamentService: TournamentService, public formBuilder:FormBuilder) {
    this.signForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      army: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.signForm.valid){
      this.user = {
        name: this.signForm.get('name')?.value,
        army: this.signForm.get('army')?.value,
      };
      this.submitted = false;
      this.signForm.reset();
      this.tournamentService.postParticipants(this.user).subscribe((data) => {
        this.newParticipantEvent.emit();
    });
    }
  }
}
