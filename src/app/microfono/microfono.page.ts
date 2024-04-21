import { Component } from '@angular/core';

@Component({
  selector: 'app-microfono',
  templateUrl: './microfono.page.html',
  styleUrls: ['./microfono.page.scss'],
})
export class MicrofonoPage {
  isMicrophoneOn: boolean = true;

  toggleMicrophone() {
    this.isMicrophoneOn = !this.isMicrophoneOn;
  }
}
