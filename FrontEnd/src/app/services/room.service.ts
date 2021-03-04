import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PageID } from '../models/pageID.model';
import { Room } from '../pages/lobby/room/models/room.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  @Input()
  roomList: Array<Room> = [];

  constructor(private http: HttpClient) {}

  onCreateRoom(name, password) {
    let room = {
      name: name,
      password: password,
      memberList:[],
    };
    this.roomList.push(room);
    this.http.post('http://192.168.31.136:3000/room/create', {
      name: name,
      password: password,
    });
  }
  
}
