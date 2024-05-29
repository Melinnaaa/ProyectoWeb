import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { User } from '../interfaces/users'; // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  userId: string = '';
  user: User = { Rut: '', Nombre: '', Correo_electronico: '', Contrasena: '', Region: '', Comuna: '', role: 0 }; 
  message: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Inicializar cualquier dato necesario
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(
      data => {
        this.user = data;
      },
      error => {
        this.message = 'Error al obtener el usuario.';
        console.error('Error fetching user data', error);
      }
    );
  }

  updateUser() {
    this.userService.updateUserById(this.userId, this.user).subscribe(
      response => {
        this.message = 'Usuario actualizado correctamente.';
      },
      error => {
        this.message = 'Error al actualizar el usuario.';
        console.error('Error updating user', error);
      }
    );
  }
}
