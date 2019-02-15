import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chart } from 'chart.js';
import { FEATURE_EFFECTS } from '@ngrx/effects/src/tokens';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  // PHP 7.x
  private apiUrl = 'http://brucemacintyre.com/fullstack_php/data.php?s=mobile';

  // Python 3.x
  // private apiUrl = 'http://localhost:5000/auth_boilerplate/api/python/data';

  public data: Array<any>;

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;


  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => {
      this.getData();
    }, 400);
  }

  init() {

    const vals: string[] = [];
    const areas: string[] = [];
    const vals2: string[] = [];
    const areas2: string[] = [];
    const bgs: string[] = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];
    const borders: string[] = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'];
    const clr_bg: string[] = [];
    const clr_br: string[] = [];

    let colorIndex = 0;
    let cnt = 0;
    this.data.forEach(element => {
      if (cnt < 11) {
        vals.push(element.value);
        areas.push(element.area);
      } else {
        vals2.push(element.value);
        areas2.push(element.area);
      }

      clr_bg.push((colorIndex === 1) ? bgs[1] : bgs[0]);
      clr_br.push((colorIndex === 1) ? borders[1] : borders[0]);
      if (colorIndex === 1) {
        colorIndex = 0;
      } else {
        colorIndex = 1;
      }

      cnt++;
    });

    console.log('vals ' + vals);

    Chart.defaults.global.defaultFontColor = 'white';
    this.lineCanvas = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: areas,
        datasets: [{
          label: '# Mobile Devices in Millions',
          data: vals,
          backgroundColor: clr_bg[0],
          fill: false,
          lineTension: 0.1,
          borderColor: clr_br[0],
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        }, {
          label: '# Ipads Devices in Millions',
          data: vals2,
          backgroundColor: clr_bg[1],
          fill: false,
          lineTension: 0.1,
          borderColor: clr_br[1],
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        }]
      }
    });
  }

  public getData() {

    const httpHeaders = new HttpHeaders()
      .set('Content', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Cache-Control', 'no-cache');

    const body = '';

    this.http.post(this.apiUrl, body, { headers: httpHeaders, responseType: 'json' })
      .subscribe(relations => {
        this.data = Object.keys(relations).map(function (personNamedIndex) {
          const row = relations[personNamedIndex];
          // do something with person
          console.log(row);
          return row;
        });

        this.init();
      },

        response => {
          //  console.log(response);
          console.log('response : ' + JSON.stringify(response));
          // console.log('response : ' + response.error.text);
        },
        () => {

        });
  }
}

export interface Row {
  area: string;
  year: string;
  value: number;
  footnotes: string;
}
