import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  async createUser(displayName, uid, photoURL, email) {
    await this.httpClient
      .post('http://192.168.31.136:3000/user/create', {
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        uid: uid,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
  }
}
