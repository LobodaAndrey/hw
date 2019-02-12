import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LineChartComponent } from './components/graphic/graphic.component';
import { PieComponent } from './components/pie/pie.component';
import { BarComponent } from './components/bar/bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineChartComponent,
    PieComponent,
    BarComponent,
    FooterComponent,
    TableComponent,
    ListComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MDBBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
