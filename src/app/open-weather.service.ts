import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationObject } from './location-object';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private baseURL = 'https://api.openweathermap.org/data/2.5/forecast?';
  private params = '&units=metric&mode=json';
  private apiKey = '&appid=8bccb687d1e13903154c3d6b79290b43';

  constructor(
    private http: HttpClient
  ) { }

  getForecast(location: string | LocationObject): Observable<any> {
    let url: string;

    if (typeof location === 'string') {
      url = `${this.baseURL}q=${location + this.params + this.apiKey}`;
    } else {
      url = `${this.baseURL}lat=${location.latitude}&lon=${location.longitude}${this.params + this.apiKey}`;
    }

    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('getForecast'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
