import { Component, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  barChart: Chart | undefined;
  donutChart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    const barChart = new Chart('barChartCanvas', {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
              data: [6.5, 3, 6, 8, 5, 2, 4, 9, 2, 5, 3, 2],
              backgroundColor: [
                '#bc8f8f', 
                'yellow',            
                '#faebd7',              
                '	#7fff00',              
                '#87cefa',         
                '	#ffa07a',            
                '#c0c0c0',        
                '#ff69b4', //August             
                '#f0e68c',              
                '#e6e6fa',            
                '#20b2aa',            
                '#ff4500',  
            ]
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false 
            },
            title: {
                display: true,
                text: 'New Subscriptions Added Per Month',
                color: 'black',
                font: {
                    size: 15,
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#dcdcdc' 
                }
            },
            y: {
                grid: {
                    color: '#dcdcdc' 
                }
            }
        }
    }
});
  

// For Donut Chart, need to convert numbers to percentages
// Declare variables
const originalData = [3.2, 18.4, 15, 4, 9];
const total = originalData.reduce((sum, value) => sum + value, 0);
const percentData = originalData.map(value => (value / total * 100).toFixed(2));

const donutChart = new Chart('donutChartCanvas', {
    type: 'doughnut',
    data: {
        labels: ['Netflix', 'Spotify', 'Tidal', 'Disney+', 'DoorDash'],
        datasets: [{
            data: percentData,
            backgroundColor: ['#FFFF00', '#00FF00', '#7fffd4', 'blue', 'red']
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    color: 'black',
                    font: {
                        size: 15,
                    }
                }
          },
            title: {
                display: true,
                text: 'Monthly Subscription Breakdown',
                color: 'black',
                font: {
                    size: 15,
                    weight: 'bold'
                }
            }
        }
        // ... other options
    }
});
  }
}







//   public pieChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           color: 'black'
//         }
//       },

//       title: {
//         display: true,
//         text: 'Monthly Subscription Breakdown',
//         color: 'black'
//       }

//     }
//   };
//   public pieChartType: ChartType = 'pie';
//   public pieChartPlugins = [];
  
//   public pieChartData: ChartData<'pie', number[], string | string[]> = {
//     labels: ['Netflix', 'Spotify', 'Hulu', 'Disney+', 'HBO Max', 'Tidal'],
//     datasets: [{
//       data: [12.1, 35.98, 11.92, 10.93, 15.07, 14.00],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       hoverBackgroundColor: [
//         'rgba(255, 99, 132, 0.4)',
//         'rgba(54, 162, 235, 0.4)',
//         'rgba(255, 206, 86, 0.4)',
//         'rgba(75, 192, 192, 0.4)',
//         'rgba(153, 102, 255, 0.4)',
//         'rgba(255, 159, 64, 0.4)'
//       ]
//     }]
//   };
// donutChart: any;
// lineChart: any;
// }




