import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../room/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor(public room: RoomService) {}

  ngOnInit(): void {}
  @Input()
  roomList: Array<Room> = [
    { id: 'sketch 1', picture: 'p1' },
    { id: 'sketch 2', picture: 'p2' },
    { id: 'sketch 3', picture: 'p3' },
    { id: 'sketch 4', picture: 'p4' },
    { id: 'sketch 5', picture: 'p5' },
    { id: 'sketch 6', picture: 'p6' },
    { id: 'sketch 7', picture: 'p7' },
    { id: 'sketch 8', picture: 'p8' },
    { id: 'sketch 9', picture: 'p9' },
    { id: 'sketch 10', picture: 'p10' },
  ];
}
