import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfono',
  templateUrl: './microfono.page.html',
  styleUrls: ['./microfono.page.scss'],
})
export class MicrofonoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  micImageSrc = 'https://static.vecteezy.com/system/resources/previews/000/422/662/non_2x/microphone-icon-vector-illustration.jpg'; // Ruta de la primera imagen

  cambiarImagen() {
    if (this.micImageSrc === 'https://static.vecteezy.com/system/resources/previews/000/422/662/non_2x/microphone-icon-vector-illustration.jpg') {
      this.micImageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswkUBCqXqXnZrzRpDx5y3CwstO_lNxNGdlt7sbGTp1A&s.jpg'; // Cambia la ruta de la imagen a la segunda imagen
    } else {
      this.micImageSrc = 'https://static.vecteezy.com/system/resources/previews/000/422/662/non_2x/microphone-icon-vector-illustration.jpg'; // Cambia la ruta de la imagen a la primera imagen
    }
  }
}
