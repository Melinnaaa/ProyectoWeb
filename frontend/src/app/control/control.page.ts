import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements AfterViewInit, OnDestroy {
  private apiUrl = 'http://192.168.1.106:3001/api/control'; // Reemplaza con la IP de tu Raspberry Pi
  private keepAliveUrl = 'http://192.168.1.106:3001/api/keep-alive'; // URL para enviar la señal de control activo
  private keepAliveSubscription: Subscription | null = null; // Inicializar con null

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.setupEventListeners();
    this.startKeepAlive();
  }

  ngOnDestroy() {
    if (this.keepAliveSubscription) {
      this.keepAliveSubscription.unsubscribe();
    }
  }

  setupEventListeners(): void {
    document.body.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.nodeName === "A") {
        e.preventDefault();
      }
    });
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft': this.sendCommand('LEFT'); break;
      case 'ArrowRight': this.sendCommand('RIGHT'); break;
      case 'ArrowUp': this.sendCommand('FORWARD'); break;
      case 'ArrowDown': this.sendCommand('BACKWARD'); break;
    }
  }

  sendCommand(command: string): void {
    this.http.post(this.apiUrl, { command: command }).subscribe(response => {
      console.log('Comando enviado:', response);
    }, error => {
      console.error('Error al enviar el comando:', error);
    });
  }

  startKeepAlive(): void {
    this.keepAliveSubscription = interval(1000).subscribe(() => {
      this.http.post(this.keepAliveUrl, {}).subscribe(response => {
        console.log('Keep-alive signal sent:', response);
      }, error => {
        console.error('Error sending keep-alive signal:', error);
      });
    });
  }
}
