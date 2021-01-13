import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType,ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChartType1: ChartType = 'line';
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September','October','November','December'];

  lineChartOptions = {
    responsive: true,
  };
  lineChartData: ChartDataSets[] = [
    {
     data: [65, 90 ,35],
     label: 'videos made',
     fill: false
    },
  ];
  lineChartPlugins = [];
  lineChartType = 'line';


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['2019', '2020', '2021'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
     barThickness: 16,
     barPercentage: 0.5,
     data: [65, 59, 80],
     label: 'Growth'
    },
    {
     barThickness: 16,
     barPercentage: 0.5,
     data: [28, 48, 40],
     label: 'Net'
     }
    ];
    barChartColors: Color[] = [
      { backgroundColor: '#24d2b5' },
      { backgroundColor: '#20aee3' },
     ];
     lineChartColors: Color[] = [
     { borderColor: '#20aee3' },
     ];
  constructor() { }

  ngOnInit(): void {
  }

}
