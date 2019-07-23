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
    return this.http.get(URL.citiesURL).pipe(
      map((res: any) => res)
    );
  }
}
