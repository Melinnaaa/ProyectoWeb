import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-datos-sensores',
  templateUrl: './datos-sensores.page.html',
  styleUrls: ['./datos-sensores.page.scss'],
})
export class DatosSensoresPage implements OnInit {
  sensorData: any;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.getSensorData();
  }

  getSensorData() {
    this.sensorService.getSensorData().subscribe(data => {
      this.sensorData = data;
      console.log(this.sensorData); // Para verificar que los datos están siendo recibidos
    });
  }
}
