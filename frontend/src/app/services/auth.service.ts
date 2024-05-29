import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/signin';
  private roleSubject = new BehaviorSubject<number>(0);
  roleChanges = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {
    const storedRole = Number(localStorage.getItem('role'));
    this.roleSubject.next(storedRole);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password }, { withCredentials: true })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          const role = response.user.user.role;
          const userName = response.user.user.Nombre;
          localStorage.setItem('role', role.toString());
          localStorage.setItem('userName', userName.toString());
          this.roleSubject.next(role);
          localStorage.setItem('user', JSON.stringify(response.user));
          return response;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    this.roleSubject.next(0);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return Number(localStorage.getItem('role'));
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
