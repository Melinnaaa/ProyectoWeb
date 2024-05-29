import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/signin';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          localStorage.setItem('role', response.user.user.role);
          return response;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }
    return throwError(errorMessage);
  }
}
