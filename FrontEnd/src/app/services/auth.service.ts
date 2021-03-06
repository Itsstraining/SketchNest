import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserService } from './user.service';
// import { userInfo } from 'os';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: firebase.default.User;
  public provider;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public User: UserService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('login success! ' + user.displayName);
        // alert('Login successfully, '+user.displayName)
        console.log(this.user);
        this.User.createUser(
          this.user.displayName,
          this.user.uid,
          this.user.photoURL,
          this.user.email
        );
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
      // alert('Logged out')
    });
  }
  async login(email: any, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log(result);
    this.user = email;
    console.log(this.user);
    this.router.navigate(['/lobby']);
  }
  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  public isAuthenticated(): boolean {
    if (this.user) {
      return true;
    }
    return false;
  }
}
