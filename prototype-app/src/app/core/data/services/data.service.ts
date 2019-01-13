import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

get(endpoints: string, params: string = ''): Observable<any> {
    let apiURL: string = endpoints;
    apiURL += params ? ('?' + params) : '';
    console.log(apiURL);
    let startTime = new Date();
    return this.http.get<any>(apiURL).pipe(
      tap((respond) => {
        let endTime = new Date();
        let diff = (endTime.getTime() - startTime.getTime()) / 1000;
        console.log('The GET request ', apiURL, ' took ', diff, ' seconds.');
      }),
      catchError(error => {
        /*const serviceInfo = new ServiceInfo({
          service: serviceName,
          procedure: procedureName,
          apiURL: apiURL
        });
        this.errorService.handleHttpError('GET', error, serviceInfo, startTime);*/
        throw error;
        //throw new Error(error.error ? error.error : error.message);
      })
    );
  }

}
