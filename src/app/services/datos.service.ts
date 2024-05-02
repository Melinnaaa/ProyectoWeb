import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<any[]> {
    return this.http.get<{regions: any[]}>('assets/regiones.json')
      .pipe(
        map(response => response.regions)
      );
  }
}