import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaintService {
  public endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getPaint() {
    return this.http.get(`${this.endpoint}/paints`).pipe(
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

  public postPaint(image: any) {
    return this.http.post(`${this.endpoint}/paints`, image).pipe(
      map((paintRequest) => {
        if (!paintRequest){
          throw new Error ('Value expected!');
        } else {
           return paintRequest;
        }
      }),
      catchError(error => {
        console.log(error)
        throw new Error (error);
      })
    );
  }
}
