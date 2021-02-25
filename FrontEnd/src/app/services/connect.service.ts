import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  socket;
  constructor() {}
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
