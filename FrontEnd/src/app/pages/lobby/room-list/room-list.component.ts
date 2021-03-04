import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../room/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor(public room: RoomService, public router: Router) {}

  ngOnInit(): void {}

  mouseDown() {
    this.router.navigate(['draw']);
  }
}
