import { Injectable } from '@angular/core';
import {GroceryItem} from "../domains/GroceryItem";
import {catchError, Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {logger} from "../utils/DngLogger";

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private apiUrl='api/grocery' ;

  constructor(private http: HttpClient) { }

  fetchItems(): Observable<GroceryItem[]> {
    return this.http.get<GroceryItem[]>(this.apiUrl);
  }

  internalServer(): Observable<any> {
    return this.http.get(this.apiUrl+'/HTTP_500');
  }
  BadRequest(): Observable<any> {
    return this.http.get(this.apiUrl+'/HTTP_BadRequest');
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
        catchError((error: HttpErrorResponse) => {
          logger.error('An error occurred:', error);
          if (error.status === 404) {

            return of('Data not found');
          } else {

            return of('Something went wrong');
          }
        })
    );
  }
}
