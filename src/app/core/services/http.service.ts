import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private _http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this._http.get<T>(url).pipe(
      tap(_ => console.log(`get ${url} complete`)),
      catchError((err) => {
        return this.handleError(url, null)(err);
      })
    );
  }

  post<T>(url: string, payload: any): Observable<T> {
    console.log(url);
    console.log(payload);
    return this._http.post<T>(url, payload, { headers: this._headers }).pipe(
      tap(_ => console.log(`post ${url} complete`)),
      catchError((err) => {
        console.log(err);
        return this.handleError(url, null)(err);
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
