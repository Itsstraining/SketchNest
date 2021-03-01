import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'lobby',
    loadChildren: () =>
      import('./pages/lobby/lobby.module').then((m) => m.LobbyModule), canActivate: [AuthGuardService]

     
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'draw',
    loadChildren: () =>
      import('./pages/draw/draw.module').then((m) => m.DrawModule),canActivate: [AuthGuardService]
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('../app/pages/pricing/pricing.module').then(
        (m) => m.PricingModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
