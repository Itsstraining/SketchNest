import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-dialog-create-room',
  templateUrl: './dialog-create-room.component.html',
  styleUrls: ['./dialog-create-room.component.scss'],
})
export class DialogCreateRoomComponent implements OnInit {
  constructor(
    public room: RoomService,
    public dialogRef: MatDialogRef<DialogCreateRoomComponent>,
    public router: Router
  ) {}
  createRoom(name, password) {
    this.room.onCreateRoom(name, password);
  }

  ngOnInit(): void {}
}
