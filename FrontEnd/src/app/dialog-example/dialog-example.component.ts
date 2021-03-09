import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent implements OnInit {
  url = 'http://localhost:3000';
  constructor(
    public db: AngularFirestore,
    public connect: ConnectService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {}
  public async Invite(email) {
    console.log(this.connect.canvasRoom);
    let a = await this.http.post(this.url + `/user/room-update`, {
      email:email,
      roomID:this.connect.canvasRoom
    }).subscribe((data)=>{console.log(data)});
    console.log(a);
  }
}
