import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  socket;
  private url: 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  public setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
