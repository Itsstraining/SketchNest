import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';
const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SketchNest';
  constructor() {}
  socket;
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
  }
}
