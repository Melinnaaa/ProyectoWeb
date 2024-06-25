import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private robotUrl: string;

  constructor(private http: HttpClient) { 
    this.robotUrl = environment.robot;
  }

  getSensorData(): Observable<any> {
    return timer(0, 1000).pipe( // Realiza una petición cada segundo
      switchMap(() => this.http.get<any>(`${this.robotUrl}/sensors`))
    );
  }
}
