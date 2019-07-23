import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './summary/main/main.component';


const routes: Routes = [
  { path: '',  component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    routes,
      
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
