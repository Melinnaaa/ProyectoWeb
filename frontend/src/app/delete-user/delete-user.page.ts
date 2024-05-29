import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
})
export class DeleteUserPage implements OnInit {
  userId: string = '';
  users: any[] = [];
  message: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  deleteUser() {
    this.userService.deleteUserById(this.userId).subscribe(
      response => {
        this.message = 'Usuario eliminado correctamente.';
        this.loadUsers(); // Recargar la lista de usuarios
      },
      error => {
        this.message = 'Error al eliminar el usuario. No se realizaron cambios.';
        console.error('Error deleting user', error);
      }
    );
  }
}
