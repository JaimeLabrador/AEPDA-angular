import { Component, Input, OnInit } from '@angular/core';
import { Ihome, } from '../../home-models/ihome';

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
