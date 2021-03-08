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
  async createRoom(name, password) {
    await this.room.onCreateRoom(name, password);
    await this.router.navigate(['/draw']);
    // await this.room.getRoom();
  }

  ngOnInit(): void {}
}
