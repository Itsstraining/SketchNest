import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectService } from 'src/app/services/connect.service';
import { Room } from '../room/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor(
    public connect: ConnectService,
    public router: Router,
    public auth: AuthService,
    public fs: AngularFirestore
  ) {}
  roomList;
  ngOnInit(): void {
    console.log(this.auth.user.uid);
    // this.getData();
    this.fs
      .collection('user')
      .doc(this.auth.user.email)
      .snapshotChanges()
      .subscribe((data) => {
        this.roomList=data.payload.data();
        this.roomList=this.roomList.room
      });
      
  }

  async getData() {
    this.roomList = await this.connect.getListRoom(this.auth.user.email);
    // this.roomList=this.roomList.room
    // console.log(this.roomList);
  }
  mouseDown() {
    this.router.navigate(['draw']);
  }
}
