import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chart } from 'chart.js';
import { FEATURE_EFFECTS } from '@ngrx/effects/src/tokens';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss']
})
export class DashPage implements OnInit {


  @ViewChild('doughnutCanvas') doughnutCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(public http: HttpClient) {}

  ngOnInit() {

  }

  ionViewDidEnter() {

    Chart.defaults.global.defaultFontColor = 'white';

    this.doughnutCanvas = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850'
            ],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        title: {
          fontColor: 'white',
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }
}

export interface Row {
  area: string;
  year: string;
  value: number;
  footnotes: string;
}
