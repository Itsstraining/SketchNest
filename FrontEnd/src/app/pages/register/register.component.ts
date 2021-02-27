import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSignIn = false;
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isSignIn = true;
    else this.isSignIn = false;
  }
  async onSignup(email: string, password: string) {
    await this.auth.SignUp(email, password);
    if (this.auth.isLoggedIn) this.isSignIn = true;
  }
}
