import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  public title!:string;
  public president!:string;
  public vicePresident!:string;
  public treasurer!:string;
  public eventCoordinator!:string;


  constructor() { 
    this.title="Quienes somos?:";
    this.president="Juan Hernández";
    this.vicePresident="Pepe Hernández";
    this.treasurer="Jacinto Gómez";
    this.eventCoordinator="Jesus Prieto";
  }

  ngOnInit(): void {
  }

}
