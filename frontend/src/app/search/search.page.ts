import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  userId: string = '';
  user: any;

  constructor(private userService: UserService) { }

  searchUser() {
    this.userService.getUserById(this.userId).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
