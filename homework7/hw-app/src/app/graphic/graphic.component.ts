import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.sass'],
})
export class LineChartComponent {
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [20, 50, 100, 150, 200, 250, 300], label: 'My knowledge' },
    { data: [30, 60, 110, 200, 460, 770, 1900], label: 'Skills needed for a homeworks' }
  ];

  public chartLabels: Array<any> = ['Homework1', 'Homework2', 'Homework3', 'Homework4', 'Homework5', 'Homework6', 'Homework7', 'Homework8'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}