import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PageID } from '../models/pageID.model';
import { Room } from '../pages/lobby/room/models/room.model';
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  @Input()
  roomList: Array<Room> = [];

  constructor(public firestore:AngularFirestore,public auth:AngularFireAuth) {}

  onCreateRoom(name, password) {
    let room = {
      name: name,
      password: password,
      memberList:[],
    };
    this.roomList.push(room);
  }
  
}
