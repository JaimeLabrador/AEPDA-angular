import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-description',
  templateUrl: './home-description.component.html',
  styleUrls: ['./home-description.component.scss']
})
export class HomeDescriptionComponent implements OnInit {
  public title?: string;
  public content?: string;

  constructor() {
    this.title = 'BIENVENIDO A AEPDA';
    this.content = `¿Qué es AEPDA? Son las siglas del club de wargames "Asociación el poder del anillo".
      Si te gustan los wargames, la sana competencia y la buena gente este es tu lugar.
      No lo dudes y ponte en contacto con nosotros, siempre estamos abiertos a los nuevos jugadores.`;
  }

  ngOnInit(): void {
  }

}
