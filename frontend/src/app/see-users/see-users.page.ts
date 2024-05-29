import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.page.html',
  styleUrls: ['./see-users.page.scss'],
})
export class SeeUsersPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
