import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectService } from 'src/app/services/connect.service';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../room/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor(
    public connect: ConnectService,
    public room: RoomService,
    public router: Router,
    public auth: AuthService
  ) {
    
  }
  roomList;
  ngOnInit(): void {
    console.log(this.auth.user.uid);
    this.getData();
  }

  async getData(){
    this.roomList= await this.connect.getListRoom(this.auth.user.email)
    // this.roomList=this.roomList.room
    console.log(this.roomList)
  }
  mouseDown() {
    this.router.navigate(['draw']);
  }
}
