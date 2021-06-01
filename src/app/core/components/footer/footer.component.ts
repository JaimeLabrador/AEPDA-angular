import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public contact : string =`calle perico de los palotes
    sant joan despií nº123 bajos cp 254789
    AEPDA@gmail.com`;
    public copiRight : string = 'Copi right Jaime Labrador'
  constructor() { }

  ngOnInit(): void {
  }

}
