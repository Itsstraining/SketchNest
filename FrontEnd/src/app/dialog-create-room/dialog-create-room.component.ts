import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConnectService } from '../services/connect.service';
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
    public router: Router,
    public connect:ConnectService,
    public auth:AuthService
  ) {}
  async createRoom(name, password) {
    console.log(this.auth.user.uid)
    // await this.room.onCreateRoom(name, password);
    this.connect.CreateRoom(name,password,this.auth.user.uid)
    // await this.router.navigate(['/draw']);
    // await this.room.getRoom();
  }

  ngOnInit(): void {}
}
