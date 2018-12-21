import { Component } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.sass'],
})

export class PieComponent {
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [7, 10, 13, 15, 55], label: 'Как я обучаюсь' }
  ];

  public chartLabels: Array<any> = ['Повторяю html/css', 'Читаю о ванильном js', 'читаю книгу по react', 'Смотрю видео по Ангуляру', 'Пытаюсь не плакать'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}