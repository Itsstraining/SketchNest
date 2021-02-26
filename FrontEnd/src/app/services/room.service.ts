import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PageID } from '../pages/draw/models/pageID.model';
import { Room } from '../pages/lobby/room/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public room = {
    roomID: String,
    Owner: String,
    Participant: [],
  };

  @Output()
  IdChange = new EventEmitter<String>();

  constructor() {}

  createRoom(room) {
    this.room.Owner;
  }
}
