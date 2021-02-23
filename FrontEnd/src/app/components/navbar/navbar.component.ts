import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private afAuth: AngularFireAuth, public router:Router) { }
  public user = this.auth.user;

  ngOnInit(): void {

  }
  async login() {
    try {
      await this.auth.oAuthLogin();
      console.log("login success! "+this.auth.user.displayName );
      await this.router.navigate([''])
    }catch(err){
      throw(err);
    }
    
  }
  async logout() {
    await this.auth.logout();
  }
}
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}