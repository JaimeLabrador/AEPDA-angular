import { Iheader, Iimage } from './../../models/iheader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navBarImage:Iimage={
    src:'../../.././assets/images/logotipo_AEPDA__RECORTADO.jpg',
    alt:'Logotipo AEPDA',
    path:''
  };
  public navBar:Iheader[]=[
    {
      name:'Torneos',
      path:'tournament'
    },
    {
      name:'Ligas',
      path:'league'
    },
    {
      name:'Información',
      path:'info'
    },
    {
      name:'Registro',
      path:'register'
    },
  ];
  public dropDown:boolean=true
  constructor() {
  };
  

  ngOnInit(): void {
  };

  dropDownMenu(){
    this.dropDown = !this.dropDown
  }
}
