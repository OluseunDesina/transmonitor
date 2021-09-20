import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = null;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 40,
      },
      plotOptions: {
        area: {
          dataLabels: {
            enabled: false
          },
          marker: {
            enabled: false
          }
        }
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        enabled: false,
        // split: true,
        // outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          data: [71,  78, 39, 66]
        }
      ]

    }
  }

}
