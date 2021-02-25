import { Component, OnInit } from '@angular/core';
import { Room } from '../room/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  roomList: Array<Room> = [
    { id: '1', picture: '1' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
    { id: '2', picture: '2' },
  ];
}
