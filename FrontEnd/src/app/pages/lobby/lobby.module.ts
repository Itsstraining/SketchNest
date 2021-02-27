import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { MatButtonModule } from '@angular/material/button';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';

@NgModule({
  declarations: [LobbyComponent, RoomComponent, RoomListComponent],
  imports: [CommonModule, LobbyRoutingModule, MatButtonModule],
})
export class LobbyModule {}
