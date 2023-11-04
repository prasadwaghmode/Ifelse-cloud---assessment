import { Component,ViewChild } from '@angular/core';
import { 
  ChartComponent,  
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries ;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: ChartOptions ;
  @ViewChild("chart2") chart1: ChartComponent | undefined;
  public chartOptions1!: ChartOptions1;
  @ViewChild("chart3") chart2: ChartComponent | undefined;
  public chartOptions2!: ChartOptions2;

  constructor() {
    this.chartOptions = {
      series: [30,60,50],
      chart: {
        type: "donut"
      },
      labels: ["Product A", "Product B","Product C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 50
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptions1 = {
      series: [
        {
          name: "Loan Disbursment",
          data: [10, 41, 35, 51, 49,64]
        }
      ],
      chart: {
        height: 250,
        width:300,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
        ]
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "PRODUCT A",
          data: [35, 55, 41, 40]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 15]
        }
      ],
      chart: {
        type: "bar",
        height: 250,
        width:300,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 200,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011"
        ]
      },
      legend: {
        position: "bottom",
        offsetY: 5
      },
      fill: {
        opacity: 1
      }
    };
  }
}
