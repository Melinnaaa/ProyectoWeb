import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos.service';  // Ajusta la ruta según sea necesario

interface Commune {
  name: string;
  identifier: string;
}

interface Region {
  name: string;
  romanNumber: string;
  number: string;
  abbreviation: string;
  communes: Commune[];
}

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})

export class RegisterPage implements OnInit
{
  
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  rut: string = '';
  region: string = '';
  comuna: string = '';
  acceptsTerms: boolean = false;
  formSubmitted = false;

  emailError: string = '';
  rutError: string = '';
  passwordError: string = '';

  regions: Region[] = [];
  communes: Commune[] = [];
  selectedRegion: string = '';
  selectedCommune: string = '';

  constructor(private router: Router, private datosService: DatosService){}

  ngOnInit() {
    this.loadRegions();
  }

  loadRegions() {
    this.datosService.getRegions().subscribe(data => {
      this.regions = data;  // Asumiendo que data es un arreglo de regiones
    });
  }
  
  loadCommunes() {
    const region = this.regions.find(r => r.name === this.selectedRegion);
    this.communes = region ? region.communes : [];
    console.log('Selected Region:', region);  // Esto te mostrará qué región se ha seleccionado
    console.log('Communes:', this.communes);  // Esto verificará que las comunas están siendo cargadas correctamente
  }  
  
  onRegionChange(event: any) {
    this.selectedRegion = event.detail.value;
    this.loadCommunes();
  }
  

  onSubmit() 
  {
    this.formSubmitted = true; 
    if (!this.validateForm()) {
      console.error('El formulario es valido');
      return;
    }
    // Procesar los datos del formulario, por ejemplo enviar a un servidor
    console.log('Form Data:', {
    email: this.email,
    username: this.username,
    rut: this.rut,
    region: this.region,
    comuna: this.comuna,
    acceptsTerms: this.acceptsTerms
    });
    this.router.navigate(['/principal']); // Redirigir a la página principal
  }

  validateForm(): boolean {
    let isValid = true;

    // Valida el correo electrónico
    if (!this.validateEmail()) 
    {
      this.emailError = 'Correo invalido.';
      isValid = false;
    } 
    else 
    {
      this.emailError = '';
    }

    // Valida el RUT
    if (!this.validateRut(this.rut)) 
    {
      this.rutError = 'RUT inválido';
      isValid = false;
    } 
    else 
    {
      this.rutError = '';
    }

    // Valida que las contraseñas coincidan
    if (this.password !== this.confirmPassword) 
    {
      this.passwordError = 'Las contraseñas no coinciden.';
      isValid = false;
    }
    else if (!this.password || this.password.trim() === '')
    {
      this.passwordError = 'Las contraseña no puede estar vacia.';
      isValid = false;
    } 
    else 
    {
      this.passwordError = '';
    }

    return isValid;
  }

  // Valida el rut
  validateRut(rut: string): boolean 
  {
    const rutClean = rut.replace(/[\.\-]/g, '');
    let rutDigits = rutClean.slice(0, -1);
    let verifier = rutClean.slice(-1).toUpperCase();

    let t = parseInt(rutDigits, 10);
    let m = 0;
    let s = 1;
    while (t > 0) {
      s = (s + (t % 10) * (9 - m++ % 6)) % 11;
      t = Math.floor(t / 10);
    }
    const checkDigit = (s > 0) ? (s - 1).toString() : 'K';
    return verifier === checkDigit;
  }

  // Valida el email
  validateEmail(): boolean 
  {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(this.email);
  }

}
