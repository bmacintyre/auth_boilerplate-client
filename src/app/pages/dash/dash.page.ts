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
  @ViewChild('doughnutCanvas') bubbleChart;

  doughnutChart: any;
  lineChart: any;

  constructor(public http: HttpClient) { }

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

    this.bubbleChart = new Chart(document.getElementById('bubble-chart'), {
      type: 'bubble',
      data: {
        labels: 'Africa',
        datasets: [
          {
            label: ['China'],
            backgroundColor: 'rgba(255,221,50,1)',
            borderColor: 'rgba(255,221,50,1)',
            data: [{
              x: 21269017,
              y: 5.245,
              r: 15
            }]
          }, {
            label: ['Denmark'],
            backgroundColor: 'rgba(60,186,159,1)',
            borderColor: 'rgba(60,186,159,1)',
            data: [{
              x: 258702,
              y: 7.526,
              r: 10
            }]
          }, {
            label: ['Germany'],
            backgroundColor: '#0000FF',
            borderColor: '#0000FF',
            data: [{
              x: 3979083,
              y: 6.994,
              r: 15
            }]
          }, {
            label: ['Japan'],
            backgroundColor: 'rgba(193,46,12,1)',
            borderColor: 'rgba(193,46,12,1)',
            data: [{
              x: 4931877,
              y: 5.921,
              r: 15
            }]
          }
        ]
      },
      options: {
        legend: {
          position: 'top',
          labels: {
            fontColor: 'white'
          }
        },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }, scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Happiness'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'GDP (PPP)'
            }
          }],
          scale: {
            ticks: {
              beginAtZero: true,
              fontColor: 'white', // labels such as 10, 20, etc
              showLabelBackdrop: false // hide square behind text
            },
            pointLabels: {
              fontColor: 'white' // labels around the edge like 'Running'
            },
            gridLines: {
              color: 'rgba(255, 255, 255, 0.2)'
            },
            angleLines: {
              color: 'white' // lines radiating from the center
            }
          }
        }
      }
  });

  //   const randomScalingFactor = function() {
  //     return Math.round(Math.random() * 100);
  //   };
  //   const chartColors = {
  //     red: 'rgb(255, 99, 132)',
  //     orange: 'rgb(255, 159, 64)',
  //     yellow: 'rgb(255, 205, 86)',
  //     green: 'rgb(75, 192, 192)',
  //     blue: 'rgb(54, 162, 235)',
  //     purple: 'rgb(153, 102, 255)',
  //     grey: 'rgb(231,233,237)'
  //   };

  //   const color = Chart.helpers.color;
  //   this.radarChart = new Chart(document.getElementById('radar-chart'), {
  //     type: 'radar',
  //     data: {
  //       labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
  //       datasets: [{
  //               label: 'My First dataset',
  //               backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
  //               borderColor: chartColors.red,
  //               borderWidth: '2px',
  //               pointBackgroundColor: chartColors.red,
  //               data: [
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor()
  //               ]
  //             }, {
  //               label: 'My Second dataset',
  //               backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
  //               borderColor: chartColors.blue,
  //               borderWidth: '2px',
  //               pointBackgroundColor: chartColors.blue,
  //               data: [
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor(),
  //                 randomScalingFactor()
  //               ]
  //             }, ]
  //     },
  //     options: {
  //           legend: {
  //             position: 'top',
  //             labels: {
  //               fontColor: 'white'
  //             }
  //           },
  //           title: {
  //             display: true,
  //             text: 'GDP',
  //             fontColor: 'white'
  //           },
  //           scale: {
  //             ticks: {
  //               beginAtZero: true,
  //               fontColor: 'white', // labels such as 10, 20, etc
  //               showLabelBackdrop: false // hide square behind text
  //             },
  //             pointLabels: {
  //               fontColor: 'white' // labels around the edge like 'Running'
  //             },
  //             gridLines: {
  //               color: 'rgba(255, 255, 255, 0.2)'
  //             },
  //             angleLines: {
  //               color: 'white' // lines radiating from the center
  //             }
  //           }
  //         }
  // });


    // const color = Chart.helpers.color;
    // const config = {
    //   type: 'radar',
    //   data: {
    //     labels: [
    //       ['Eating', 'Dinner'],
    //       ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'
    //     ],
    //     datasets: [{
    //       label: 'My First dataset',
    //       backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
    //       borderColor: chartColors.red,
    //       pointBackgroundColor: chartColors.red,
    //       data: [
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor()
    //       ]
    //     }, {
    //       label: 'My Second dataset',
    //       backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
    //       borderColor: chartColors.blue,
    //       pointBackgroundColor: chartColors.blue,
    //       data: [
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor()
    //       ]
    //     }, ]
    //   },
    //   options: {
    //     legend: {
    //       position: 'top',
    //       labels: {
    //         fontColor: 'white'
    //       }
    //     },
    //     title: {
    //       display: true,
    //       text: 'Chart.js Radar Chart',
    //       fontColor: 'white'
    //     },
    //     scale: {
    //       ticks: {
    //         beginAtZero: true,
    //         fontColor: 'white', // labels such as 10, 20, etc
    //         showLabelBackdrop: false // hide square behind text
    //       },
    //       pointLabels: {
    //         fontColor: 'white' // labels around the edge like 'Running'
    //       },
    //       gridLines: {
    //         color: 'rgba(255, 255, 255, 0.2)'
    //       },
    //       angleLines: {
    //         color: 'white' // lines radiating from the center
    //       }
    //     }
    //   }
    // };

    // // A plugin to draw the background color
    // Chart.plugins.register({
    //   beforeDraw: function(chartInstance) {
    //     const ctx = chartInstance.chart.ctx;
    //     ctx.fillStyle = 'black';
    //     ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
    //   }
    // });
  }
}

export interface Row {
  area: string;
  year: string;
  value: number;
  footnotes: string;
}
