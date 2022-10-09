import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OpTableComponent } from './op-table/op-table.component';
@NgModule({
  declarations: [
    AppComponent,
    OpTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    RatingModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
