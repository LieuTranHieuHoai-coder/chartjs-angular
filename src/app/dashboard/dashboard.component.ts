import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //Chart.defaults.global.legend.labels.usePointStyle = true;
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      title: {
        position: "bottom"
      },
      
      data: {
          labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
          datasets: [{
              label: 'Tổng số',
              data: [333, 320, 350, 350, 340, 330,336,336,335,335,335,335],
              backgroundColor: [
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
                  'rgb(68,115,197)',
              ],
              borderWidth: 1
          },{
            label: 'Nhân viên mới',
            data: [15, 5, 0, 0, 10, 2,3,1,5,4,5,5],
            backgroundColor: [
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
                'rgba(248, 148, 6, 1)',
            ],
            borderWidth: 1
        },{
          label: 'Thôi việc',
          data: [2,3,1,5,15,3,4,5,6,0,0,0],
          backgroundColor: [
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
              'rgba(218, 223, 225, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
            display: true,
            text: 'Tình hình nhân sự 2020',
            fontSize: 20,
            fontStyle: "normal"
        },
        legend: {
          position: "bottom",
          align: "center",
          fontSize: 12,
          labels: {
            boxWidth: 12,
            padding: 20,
          },
        },
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                padding: 10,
              },
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      suggestedMin: 50,
                      suggestedMax: 400
                  }
              }]
          }, 
      },

      showTooltips: false,
      onAnimationComplete: function () {
  
          var ctx = this.chart.ctx;
          ctx.font = this.scale.font;
          ctx.fillStyle = this.scale.textColor
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
  
          this.datasets.forEach(function (dataset) {
              dataset.bars.forEach(function (bar) {
                  ctx.fillText(bar.value, bar.x, bar.y - 5);
              });
          })
      },
      
    });
      
    Chart.plugins.register({
          afterDatasetsDraw: function(chart, easing) {
              
              var ctx = chart.ctx;

              chart.data.datasets.forEach(function (dataset, i) {
                  var meta = chart.getDatasetMeta(i);
                  if (!meta.hidden) {
                      meta.data.forEach(function(element, index) {
                          
                          ctx.fillStyle = 'rgb(0, 0, 0)';

                          var fontSize = 16;
                          var fontStyle = 'normal';
                          var fontFamily = 'Helvetica Neue';
                          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                          
                          var dataString = dataset.data[index].toString();

                          
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';

                          var padding = 5;
                          var position = element.tooltipPosition();
                          ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                      });
                  }
              });
          }
      });
  }

}
