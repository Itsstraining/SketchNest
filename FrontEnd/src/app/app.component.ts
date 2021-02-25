import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../app/services/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SketchNest';
  constructor(public connectService: ConnectService) {}

  ngOnInit() {
    this.connectService.setupSocketConnection();
  }
}
