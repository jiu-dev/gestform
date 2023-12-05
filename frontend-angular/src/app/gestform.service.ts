import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GestformService {
  private apiUrl = 'http://localhost:3000/gestform'; // NestJS API URL

  constructor(private http: HttpClient) {}

  transformNumbers(numbers: number[]): Observable<(string | number)[]> {
    return this.http
      .post<(string | number)[]>(this.apiUrl, { numbers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error.message);
      return throwError(
        'Veuillez saisir des chiffres compris entre -1000 et 1000'
      );
    }
    return throwError('An unexpected error occurred');
  }
}
