import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  public endpoint = 'http://localhost:3000';

  constructor(private http:HttpClient) { 
  }

  public getTournament () {
    return this.http.get(`${this.endpoint}/tournament`).pipe(
      map((request)=>{
        if (!request){
          throw new Error ('Value expected!');
        } else {
          console.log(request)
           return request;
        }
      }),
      catchError(error =>{
        throw new Error ('Failed charge!')
      })
    );
  };
}
