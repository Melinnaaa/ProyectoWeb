import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.userUrl = environment.endpoint;
    this.apiUrl = 'http://localhost:3000/api/signup'
  }

  saveUser(user: User, captchaToken: string): Observable<any> {
    const requestBody = { ...user, captchaToken };
    return this.http.post(`${this.apiUrl}`, requestBody);
  }
}
