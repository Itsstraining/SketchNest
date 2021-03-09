import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateRoomComponent } from '../../dialog-create-room/dialog-create-room.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  public user: firebase.default.User;
  public User: any;
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public auth: AuthService,
  ) {}
  openDialog() {
    this.dialog.open(DialogCreateRoomComponent);
  }

  ngOnInit(): void {}
}
