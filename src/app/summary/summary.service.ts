import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, delay, catchError, map } from 'rxjs/operators';

import { URL } from '../const/url'

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor( private http: HttpClient) { }


  getAllCities(){
    return this.http.get(URL.citiesURL, { responseType:"text" } ).pipe(
      map((res: any) => res)
    );
  }
  getCurrentWeather(searchURL:any){
    return this.http.get(URL.getCurrentWeatherURL+searchURL)
  }

  getHourlyFocast(searchURL:any){
    return this.http.get(URL.getHourlyForcastURL+searchURL)
  }
}
