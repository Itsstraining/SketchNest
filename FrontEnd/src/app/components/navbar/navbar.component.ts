import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
  async logOut() {
    await this.auth.logout();
  }
}
function menuOnClick() {
  document.getElementById('menu-bar').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}
