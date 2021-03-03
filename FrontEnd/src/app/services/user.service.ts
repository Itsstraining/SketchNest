import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  user = null;
  async createUser(displayName, uid, photoURL, email) {
    await this.httpClient
      .post('http://127.0.0.1:3000/create/user', {
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        id: uid,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
  }
}
