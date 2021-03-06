import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('firstDialog') firstDialog: TemplateRef<any>;

  constructor(
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    public router: Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private User: UserService
  ) {}
  public email: string;
  public password: string;
  public user: any = this.auth.user;

  ngOnInit(): void {}
  async loginGG() {
    try {
      await this.auth.oAuthLogin();

      await this.router.navigate(['']);
    } catch (err) {
      throw err;
    }
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }
  async login() {
    try {
      await this.auth.login(this.email, this.password);
      this.openDialogWithRef(this.firstDialog);
      this.user = this.email;
      console.log(this.user);
    } catch (err) {
      console.log(err);
    }
  }
  async logout() {
    await this.auth.logout();
  }
}
