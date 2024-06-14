import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = 'http://192.168.1.106:3001/api/sensors'; 
  constructor(private http: HttpClient) { }

  getSensorData(): Observable<any> {
    return timer(0, 1000).pipe( // Realiza una petición cada segundo
      switchMap(() => this.http.get<any>(this.apiUrl))
    );
  }
}
