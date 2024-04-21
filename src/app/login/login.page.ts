import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  formSubmitted = false;
  emailError: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.formSubmitted = true;
    if (!this.validateLogin())
    {
      console.error('El formulario es valido');
      return;
    }
    if (this.email && this.password) 
    {
      console.log('Formulario válido', { email: this.email, password: this.password });
      this.router.navigate(['/principal']); // Redirigir a la página principal
    } 
    else 
    {
      console.error('Formulario no válido');
    }
  }

  validateLogin(): boolean {
    let isValid = true;
    // Valida el correo electrónico
    if (!this.validateEmail()) 
    {
      this.emailError = 'Correo invalido. Por favor, intenta nuevamente.';
      isValid = false;
    } 
    else 
    {
      this.emailError = '';
    }
    return isValid;
  }

  // Valida el email
  validateEmail(): boolean 
  {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(this.email);
  }
}