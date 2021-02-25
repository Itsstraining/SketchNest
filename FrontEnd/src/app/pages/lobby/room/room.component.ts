import { Component, Input, OnInit } from '@angular/core';
import { Room } from './models/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor() {}
  @Input()
  room: Room;
  ngOnInit(): void {}
}
