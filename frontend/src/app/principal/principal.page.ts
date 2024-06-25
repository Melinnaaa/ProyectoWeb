import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  private robotUrl: string;

  constructor(private http: HttpClient) {
    this.robotUrl = environment.robot;
   }

  ngOnInit() {
    const fullName = localStorage.getItem('userName') || 'Usuario';
    this.userName = fullName.split(' ')[0];
  }

  toggleStreaming() {
    if (this.streaming) {
      this.http.get(`${this.robotUrl}/stop_stream`).subscribe(() => {
        this.streaming = false;
        this.videoSrc = '';
      });
    } else {
      this.http.get(`${this.robotUrl}/start_stream`).subscribe(() => {
        this.streaming = true;
        this.detecting = false;
        this.astar = false;
        this.videoSrc = `${this.robotUrl}/video_feed`;
      });
    }
  }

  toggleDetection() {
    if (this.detecting) {
      this.http.get(`${this.robotUrl}/stop_detection`).subscribe(() => {
        this.detecting = false;
      });
    } else {
      this.http.get(`${this.robotUrl}/start_detection`).subscribe(() => {
        this.detecting = true;
        this.streaming = false;
        this.astar = false;
        this.videoSrc = '';
      });
    }
  }

  toggleAStar() {
    if (this.astar) {
      this.http.get(`${this.robotUrl}/stop_astar`).subscribe(() => {
        this.astar = false;
      });
    } else {
      this.http.get(`${this.robotUrl}/start_astar`).subscribe(() => {
        this.astar = true;
        this.streaming = false;
        this.detecting = false;
        this.videoSrc = '';
      });
    }
  }
}
