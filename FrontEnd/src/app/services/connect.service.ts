import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as EventEmitter from 'events';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  canvasRoom;
  socket;
  room;
  listRoom;
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient,public fs:AngularFirestore) {
  }
  public setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
  public async getListRoom(email) {
    let result = (await this.fs.collection("user").doc(email).get()).toPromise();
    let temp
    this.listRoom=(await result).data();
    temp=this.listRoom
    return temp.room
  }
 
  public async CreateRoom(name, pass, email) {
    let result = await this.http
      .post(this.url + '/room/create', {
        roomName: name,
        password: pass,
      })
      .subscribe((data) => {
        this.room = data;
        console.log(this.room);
        this.http
          .post(this.url + '/user/room-update', {
            email: email,
            roomID: this.room.id,
          })
          .subscribe((userUp) => {
            console.log(userUp);
          });
      });
    // console.log(this.room)
  }
}
