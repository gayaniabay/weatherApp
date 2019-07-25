import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SummaryService } from '../summary.service';
import { City } from '../../modal/cities';
import { CurrentWeather } from '../../modal/currentWeather';
import { Forecast } from '../../modal/forecast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  records:any;
  citiesList: any;
  searchCityForm : FormGroup;
  sortedCities = [];
  selectedCityObj = [];
  currentTemp: any;
  currentTempData : object;
  currentWindData: object;
  currentweather: object;
  apiKey = "a96b9faed450f23f316a8aaecd26cf74";
  units = "metric";
  cityId: string;
  forecastData = [];
  collectionSize: any;
  pageSize: number;
  currentWeatherData: any[];
  key: string = 'name'; //set default
  reverse: boolean = false;
 
  p: number = 1;
  
 

  constructor(public summaryService: SummaryService, private formBuilder : FormBuilder ) { }

  ngOnInit() {
    this.sortedCities = JSON.parse(localStorage.getItem('arrayOfCities'));
    this.initializeForm();
    this.getAllCitiesFn();
    console.log(this.sortedCities);

    this.loadInitialData();
    this.getHourlyForcastFn();
  }
  onChange($event) {
    this.cityId = this.searchCityForm.get('cities').value;
    this.getSelectedCityId();
    this.getHourlyForcastFn();
  }

  initializeForm(){
    this.searchCityForm = this.formBuilder.group({
      cities : ["1248991"]
    })
  }
  loadInitialData(){
    const cityId = 1248991;
    const searchURL = "weather?id=" + cityId + "&units=" + this.units + "&appid=" + this.apiKey;
    this.summaryService.getCurrentWeather(searchURL).subscribe((data : CurrentWeather) => {

      this.currentWeatherData = []
      let x = {
        temp : data.main.temp,
        humidity : data.main.humidity,
        temp_min : data.main.temp_min,
        temp_max : data.main.temp_max,
        speed : data.wind.speed,
        icon : data.weather[0].icon
      }
      this.currentWeatherData.push(x);
    })
  }
  getSelectedCityId() {

    const searchURL = "weather?id=" + this.cityId + "&units=" + this.units + "&appid=" + this.apiKey;
    console.log(searchURL);

    this.summaryService.getCurrentWeather(searchURL).subscribe((data : CurrentWeather) => {
      this.currentWeatherData = []
      let x = {
        cityId : data.id,
        temp : data.main.temp,
        humidity : data.main.humidity,
        temp_min : data.main.temp_min,
        temp_max : data.main.temp_max,
        speed : data.wind.speed,
        icon : data.weather[0].icon
      }
      this.currentWeatherData.push(x);
      
      let currentTime = Date.now();
      let getData = JSON.parse(localStorage.getItem('selectedCityObj')) || [];

      for (let i = 0; i < getData.length; i++) {
        let diffTimestamp = currentTime - getData[i].timestamp;
        if (diffTimestamp >= 600000) {
          //getData.removeItem(getData[i].geonameid);
          console.log(getData[i].id);
        }
      }
      // set timestamp to new object
      this.currentWeatherData['timestamp'] = currentTime;
      getData.push(this.currentWeatherData);
      localStorage.setItem('selectedCityObj', JSON.stringify(getData));
    })
  }
  getHourlyForcastFn(){
    const searchURL = "forecast?id=" + "1248991" + "&units=" + this.units + "&appid=" + this.apiKey;
    this.summaryService.getHourlyFocast(searchURL).subscribe((data : Forecast)=> {
      this.forecastData;
      for (let i = 1; i < data.list.length ; i++) {
        let x = {
          time : data.list[i].dt_txt,
          clouds : data.list[i].clouds.all,
          temp : data.list[i].main.temp,
          humidity : data.list[i].main.humidity,
          wind : data.list[i].wind.speed
        }
        this.forecastData.push(x)
      }
      localStorage.setItem('selectedCityForecast', JSON.stringify(this.forecastData));
      this.collectionSize = this.forecastData.length;
      return this.forecastData.sort((a, b) => {
        return <any>new Date(b.time) - <any>new Date(a.time);
      });
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
        let csvRecord = new City();
        csvRecord.name = curruntRecord[0].trim();
        csvRecord.country = curruntRecord[1].trim();
        csvRecord.subcountry = curruntRecord[2].trim();
        csvRecord.geonameid = curruntRecord[3].trim()
        let x = {
          name: csvRecord.name,
          country: csvRecord.country,
          subcountry: csvRecord.subcountry,
          geonameid: csvRecord.geonameid
        }
        this.citiesList.push(x);
      }
    }
    this.citiesList.sort(function (a : any, b : any) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    localStorage.setItem('arrayOfCities', JSON.stringify(this.citiesList));
    //return this.citiesList;
    console.log(this.citiesList);
  }  
}