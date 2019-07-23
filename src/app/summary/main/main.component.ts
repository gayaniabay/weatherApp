import { Component, OnInit } from '@angular/core';

import { SummaryService } from '../summary.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public summaryService: SummaryService) { }

  ngOnInit() {
    this.getAllCitiesFn();
  }

  getAllCitiesFn() {
    this.summaryService.getAllCities().subscribe(data => {
      console.log(data);
    })
  }
}