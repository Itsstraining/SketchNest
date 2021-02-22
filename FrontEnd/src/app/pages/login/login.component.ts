import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    public router: Router
  ) {}
  public user = this.auth.user;

  ngOnInit(): void {}
  async login() {
    try {
      await this.auth.oAuthLogin();
      console.log('login success! ' + this.auth.user.displayName);
      await this.router.navigate(['']);
    } catch (err) {
      throw err;
    }
  }
  async logout() {
    await this.auth.logout();
  }
}
