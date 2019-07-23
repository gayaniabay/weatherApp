import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SummaryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
