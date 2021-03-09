import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Room } from './models/room.model';
import { PageID } from '../../../models/pageID.model';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConnectService } from 'src/app/services/connect.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor(public router: Router,public connect:ConnectService,public fs:AngularFirestore) {}
  @Input()
  room:any;
  pageID: PageID;
  data
  ngOnInit(): void {
    this.data=this.getData()
  }
  async getData(){
    let result =await this.fs.collection("room").doc(this.room).get().toPromise();
    this.data=(await result).data();
    let temp= this.data
    return temp
  }
  mouseDown() {
    console.log(this.room)
    this.connect.canvasRoom=this.room
    // console.log(this.pageID.name);
    this.router.navigate(['draw']);
  }
  
}
