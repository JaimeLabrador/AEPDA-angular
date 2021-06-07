import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInscriptionComponent } from './tournament-inscription.component';

describe('TournamentInscriptionComponent', () => {
  let component: TournamentInscriptionComponent;
  let fixture: ComponentFixture<TournamentInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
