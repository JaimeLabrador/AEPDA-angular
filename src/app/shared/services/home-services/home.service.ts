import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {
  public homeEndpoint = 'http://localhost:3000/home';
  
  constructor(private http:HttpClient) {
  }

  public getHome() {
    return this.http.get(this.homeEndpoint)
  }
}

