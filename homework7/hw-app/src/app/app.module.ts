import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LineChartComponent } from './graphic/graphic.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { TextComponent } from './text/text.component';

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
    LightboxComponent,
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
