import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esto permite el uso de elementos web personalizados y evita errores de componentes no conocidos
})
export class RegisterPageModule {}
