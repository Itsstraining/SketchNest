import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public room = {
    roomID: String,
    Owner: String,
    Participant: [],
  };

  constructor() {}

  createRoom(room) {
    this.room.Owner;
  }
}
