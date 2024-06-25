import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;
  constructor(private http: HttpClient) { 
    this.userUrl = environment.endpoint;
  }

  saveUser(user: User, captchaToken: string): Observable<any> {
    const requestBody = { ...user, captchaToken };
    return this.http.post(`${this.userUrl}/signup`, requestBody, { withCredentials: true });
  }

  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.get<User[]>(`${this.userUrl}/users`, { headers, withCredentials: true });
  }

  getUserById(userId: string): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.get<User[]>(`${this.userUrl}/users${userId}`, { headers, withCredentials: true });
  }

  deleteUserById(userId: string): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.delete<User[]>(`${this.userUrl}/users${userId}`, { headers, withCredentials: true });
  }

  updateUserById(userId: string, user: User): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.put<User[]>(`${this.userUrl}/users${userId}`, user, { headers, withCredentials: true });
  }
}
