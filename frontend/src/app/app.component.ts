import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarFooter = true;
  mostrarBoton = true;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => 
    {
      // Se muestra la tolbar en pags especificas
      if (event instanceof NavigationEnd) {
        this.mostrarFooter = !['/login', '/register', '/home'].includes(event.url); // Esconde el footer en 'login' y 'registro'
      }
      if (event instanceof NavigationEnd) {
        this.mostrarBoton = ![ '/principal', '/home'].includes(event.url); // Esconde el boton
      }
    });
  }

  goBack() {
    this.location.back(); // Esto llevará al usuario a la página anterior
  }
}
