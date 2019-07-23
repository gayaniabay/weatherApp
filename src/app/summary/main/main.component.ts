import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SummaryService } from '../summary.service';
import { Cities } from '../../modal/cities';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  records = [];
  citiesList: any;
  searchCityForm : FormGroup;
  list = [{"name": "x","country": "SL", "subcountry" : "wester", "geonameid": "1"}]

  constructor(public summaryService: SummaryService, private formBuilder : FormBuilder ) { }

  ngOnInit() {
    this.initializeForm();
    this.getAllCitiesFn();
  }
  onChange($event) {
    this.getSelectedCityId();
  }
  initializeForm(){
    this.searchCityForm = this.formBuilder.group({
      cities : ['']
    })
  }
  getSelectedCityId(){
    const cityId = this.searchCityForm.get('cities').value;
    const apiKey = "a96b9faed450f23f316a8aaecd26cf74";
    const searchURL = "weather?id=" +cityId + "&appid=" +apiKey
    console.log(cityId);
    this.summaryService.getCurrentWeather(searchURL).subscribe((data) =>{
      console.log(data)
    })
  }
  getAllCitiesFn() {
    this.summaryService.getAllCities().subscribe(data => {

      let csvRecordsArray = (<string>data).split(/\r\n|\n/);  
      let headersRow = this.getHeaderArray(csvRecordsArray);  
      this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length); 

    })
  }
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  } 
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    this.citiesList = [];  

    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord = new Cities();  
        csvRecord.name = curruntRecord[0].trim();  
        csvRecord.country = curruntRecord[1].trim();  
        csvRecord.subcountry = curruntRecord[2].trim();  
        csvRecord.geonameid = curruntRecord[3].trim()

        this.citiesList.push(csvRecord);  
      }  
    }  
    return this.citiesList;  
  }  
}