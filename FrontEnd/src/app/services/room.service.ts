import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PageID } from '../models/pageID.model';
import { Room } from '../pages/lobby/room/models/room.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  @Input()
  roomList: Array<Room> = [];

  constructor(private http: HttpClient, private user: AuthService) {}
  async OngetRoomName(name) {
    let temp = name;
    return temp;
  }

  async onCreateRoom(name, password) {
    let room = {
      name: name,
      password: password,
      memberList: [],
    };
    this.roomList.push(room);
    // try {
    //   let a = await this.http
    //     .get('http://192.168.31.136:3000/user/get')
    //     .toPromise()
    //     .then((e) => {
    //       console.log(e);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      await this.http
        .post('http://192.168.31.136:3000/room/create', {
          room: [
            {
              name: name,
              password: password,
            },
          ],
          owner: this.user.user.email,
        })
        .toPromise()
        .then((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  }

  // async getRoom() {
  //   let a = await this.http.get('http://192.168.31.136:3000/get/room');
  //   console.log(a['data']);
  // }
}
