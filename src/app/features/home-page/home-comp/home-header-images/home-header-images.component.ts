import { Component, Input, OnInit } from '@angular/core';
import { Ihome, } from '../../home-models/ihome';

@Component({
  selector: 'app-home-header-images',
  templateUrl: './home-header-images.component.html',
  styleUrls: ['./home-header-images.component.scss']
})
export class HomeHeaderImagesComponent implements OnInit {
  @Input() request! : Ihome;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
