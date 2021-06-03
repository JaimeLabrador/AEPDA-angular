import { Ihome } from 'src/app/features/home-page/home-models/ihome';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.scss']
})
export class HomeArticlesComponent implements OnInit {
  @Input() request! : Ihome;
  
  constructor() { }

  ngOnInit(): void {
  }

}
