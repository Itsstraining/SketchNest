import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ConnectService } from 'src/app/services/connect.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor(public connect:ConnectService) {}

  ngOnInit(): void {
    // this.connect.CreateRoom('Hello','World','vanhuugiakien@gmail.com')
  }
}
