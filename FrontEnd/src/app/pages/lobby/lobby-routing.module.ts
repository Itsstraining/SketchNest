import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawRoutingModule } from '../draw/draw-routing.module';
import { LobbyComponent } from './lobby.component';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  {
    path: 'draw',
    component: DrawRoutingModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobbyRoutingModule {}
