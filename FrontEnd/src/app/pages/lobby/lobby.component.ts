import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {DialogCreateRoomComponent} from '../../dialog-create-room/dialog-create-room.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  constructor(public router: Router, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogCreateRoomComponent);
  }
  ngOnInit(): void {}
}
