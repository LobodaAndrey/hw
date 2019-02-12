import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarComponent} from './components/bar/bar.component';
import {LineChartComponent} from './components/graphic/graphic.component';
import {ListComponent} from './components/list/list.component';
import {PieComponent} from './components/pie/pie.component';
import {TableComponent} from './components/table/table.component';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'graph', component: LineChartComponent },
  { path: 'list', component: ListComponent},
  { path: 'pie', component: PieComponent },
  { path: 'table', component: TableComponent },
  { path: 'text', component: TextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
