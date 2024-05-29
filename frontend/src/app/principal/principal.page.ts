import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  userName: string = '';
  constructor() { }

  ngOnInit() {
    const fullName = localStorage.getItem('userName') || 'Usuario';
    this.userName = fullName.split(' ')[0];
  }

}
