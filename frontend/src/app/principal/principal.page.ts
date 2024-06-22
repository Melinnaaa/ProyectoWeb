import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  userName: string = '';
  videoSrc: string = '';
  streaming: boolean = false;
  detecting: boolean = false;
  astar: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const fullName = localStorage.getItem('userName') || 'Usuario';
    this.userName = fullName.split(' ')[0];
  }

  toggleStreaming() {
    if (this.streaming) {
      this.http.get('http://192.168.1.106:3001/api/stop_stream').subscribe(() => {
        this.streaming = false;
        this.videoSrc = '';
      });
    } else {
      this.http.get('http://192.168.1.106:3001/api/start_stream').subscribe(() => {
        this.streaming = true;
        this.detecting = false;
        this.astar = false;
        this.videoSrc = 'http://192.168.1.106:3001/video_feed';
      });
    }
  }

  toggleDetection() {
    if (this.detecting) {
      this.http.get('http://192.168.1.106:3001/api/stop_detection').subscribe(() => {
        this.detecting = false;
      });
    } else {
      this.http.get('http://192.168.1.106:3001/api/start_detection').subscribe(() => {
        this.detecting = true;
        this.streaming = false;
        this.astar = false;
        this.videoSrc = '';
      });
    }
  }

  toggleAStar() {
    if (this.astar) {
      this.http.get('http://192.168.1.106:3001/api/stop_astar').subscribe(() => {
        this.astar = false;
      });
    } else {
      this.http.get('http://192.168.1.106:3001/api/start_astar').subscribe(() => {
        this.astar = true;
        this.streaming = false;
        this.detecting = false;
        this.videoSrc = '';
      });
    }
  }
}
