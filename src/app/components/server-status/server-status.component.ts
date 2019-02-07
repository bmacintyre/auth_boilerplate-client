import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit {

  @ViewChild('barCanvas') barCanvas;

  constructor() { }

  ngOnInit() {
  }

}
