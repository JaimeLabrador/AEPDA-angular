import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Injectable()

export class HomeService {
  public endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getHome() {
    return this.http.get(`${this.endpoint}/home`).pipe(
      map((request) => {
        if (!request){
          throw new Error ('Value expected!');
        } else {
           return request;
        }
      }),
      catchError(error => {
        throw new Error ('Failed charge!');
      })
    );
  }
}

