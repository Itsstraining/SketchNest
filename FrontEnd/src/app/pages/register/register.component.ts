import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {}
}
