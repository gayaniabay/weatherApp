import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const summaryRoutes: Routes = [
    { path: 'main',  component: MainComponent }
];
@NgModule({
    imports: [
      RouterModule.forChild(summaryRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class SummaryRoutingModule { }