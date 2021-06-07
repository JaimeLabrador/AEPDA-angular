import { HomeService } from '../../../shared/services/home-services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public response: any
  public loader :boolean = false;

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getHome()
  }

  public getHome() {
    this.loader=true;
  
    this.homeService.getHome().subscribe((data)=>{
      this.response=data;
      this.loader=false;
    })
  }
}
