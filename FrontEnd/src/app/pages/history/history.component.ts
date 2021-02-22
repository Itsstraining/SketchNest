import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Room ID', date: 'Join Date/Time' },
  { name: 'Room ID', date: 'Join Date/Time' },
  { name: 'Room ID', date: 'Join Date/Time' },
  { name: 'Room ID', date: 'Join Date/Time' },
  { name: 'Room ID', date: 'Join Date/Time' },
  { name: 'Room ID', date: 'Join Date/Time' },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
