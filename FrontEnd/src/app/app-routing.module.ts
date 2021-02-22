import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule) }, { path: 'lobby', loadChildren: () => import('./pages/lobby/lobby.module').then(m => m.LobbyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
