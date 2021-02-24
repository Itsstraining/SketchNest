import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: firebase.default.User;
  public provider;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));

        console.log(user.displayName);
        console.log('login success! ' + user.displayName);
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  async oAuthLogin() {
    (await this.provider) == new firebase.default.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(
      new firebase.default.auth.GoogleAuthProvider()
    );
  }
  async logout() {
    this.afAuth.signOut().then(async () => {
      await this.router.navigate(['/']);
      localStorage.removeItem('user');
      this.user = null;
    });
  }
}
