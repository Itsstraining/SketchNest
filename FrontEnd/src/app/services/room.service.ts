import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PageID } from '../models/pageID.model';
import { Room } from '../pages/lobby/room/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  @Input()
  roomList: Array<Room> = [];

  constructor() {}

  onCreateRoom(name, password) {
    let room = {
      name: name,
      password: password,
    };
    this.roomList.push(room);
  }
}
