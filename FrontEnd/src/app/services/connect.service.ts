import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  socket;
  private url: 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // setupSocketConnection() {
  //   this.socket = io(this.url);
  // }
}
