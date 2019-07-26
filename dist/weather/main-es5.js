(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/summary/main/main.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/summary/main/main.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weather\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"searchCityForm\"  (ngSubmit) = \"getSelectedCityId\">\n          <div class=\"d-flex justify-content-end\">\n            <ng-select class=\"custom\" [items]=\"sortedCities\"\n                   bindLabel=\"name\"\n                   autofocus\n                   [clearable] = \"false\"\n                   bindValue=\"geonameid\"\n                   formControlName = \"cities\"\n                   placeholder = \"Enter City\"\n                   (change)=\"onChange($event)\"\n                   [virtualScroll]=\"true\"\n                   [loading]=\"loading\"\n                   (scroll)=\"onScroll($event)\"\n                   (scrollToEnd)=\"onScrollToEnd()\">\n                    <ng-template ng-option-tmp let-item=\"item\">\n                        <span class=\"city\">{{item.name}}</span>\n                        <span class=\"subcountry\">{{item.subcountry}}</span>\n                        <span class=\"country\">{{item.country}}</span>\n                    </ng-template>\n            </ng-select>\n          </div>\n        </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n          <div class=\"card-body\" *ngFor=\"let record of currentWeatherData; index as i\">\n              <div class=\"temperature\">\n                  <i class=\"fas fa-{{record.icon}}\"></i>\n              </div>\n              <div class=\"units-block\">\n                  <h1 class=\"h1\">{{record.temp | changeTemperature : unitOfMeasure}}\n                      <span class=\"units\">\n                        <span class=\"badge\" (click) = \"convertToMat()\" [ngClass]=\"isActiveMetric ? 'active':'inactive' \">&#8451;</span><span class=\"vdivider\"></span><span class=\"badge\" (click) = \"convertToImp()\" [ngClass]=\"isActiveImp ? 'active':'inactive' \">&#8457;</span>\n                      </span>\n                    </h1>\n              </div>\n              <div class=\"d-flex justify-content-start summary\">\n                    <div>\n                        <span class=\"value\">{{record.humidity}}</span>\n                        <span class=\"lable\">humidity</span>\n                    </div>\n                    <div>\n                        <span class=\"value\">{{record.speed}}</span>\n                        <span class=\"lable\">windspeed</span>\n                    </div>\n              </div>\n              <div class=\"d-flex justify-content-end summary\">\n                      <div *ngIf=\"unitOfMeasure === 'metric' || unitOfMeasure === 'imperial'\">\n                          <span class=\"value\">{{record.temp_min | changeTemperature : unitOfMeasure}}</span>\n                          <span class=\"badge\" *ngIf=\"unitOfMeasure === 'metric'\">&#8451;</span>\n                          <span class=\"badge\" *ngIf=\"unitOfMeasure === 'imperial'\">&#8457;</span>\n                          <span class=\"lable\">min temp</span>\n                      </div>\n                      <div *ngIf=\"unitOfMeasure === 'metric' || unitOfMeasure === 'imperial'\">\n                          <span class=\"value\">{{record.temp_max | changeTemperature : unitOfMeasure}}</span>\n                          <span class=\"badge\" *ngIf=\"unitOfMeasure === 'metric'\">&#8451;</span>\n                          <span class=\"badge\" *ngIf=\"unitOfMeasure === 'imperial'\">&#8457;</span>\n                          <span class=\"lable\">max temp</span>\n                      </div>\n              </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n        <table class=\"table\">\n            <thead>\n            <tr>\n              <th scope=\"col\">Time</th>\n              <th scope=\"col\">Cloud</th>\n              <th scope=\"col\">Temperature</th>\n              <th scope=\"col\">Humidity</th>\n              <th scope=\"col\">WindSpeed</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let record of forecastData | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n              <td>{{record.time}}</td>\n              <td>{{record.clouds}}</td>\n              <td>{{record.temp | changeTemperature : unitOfMeasure}}</td>\n              <td>{{record.humidity}}</td>\n              <td>{{record.wind}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _summary_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary/main/main.component */ "./src/app/summary/main/main.component.ts");





var routes = [
    { path: '', component: _summary_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weather';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _summary_summary_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./summary/summary.module */ "./src/app/summary/summary.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _summary_summary_module__WEBPACK_IMPORTED_MODULE_11__["SummaryModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const/url.ts":
/*!******************************!*\
  !*** ./src/app/const/url.ts ***!
  \******************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
// urls
var api = "http://api.openweathermap.org/";
var apiKey = "a96b9faed450f23f316a8aaecd26cf74";
var units = "metric";
var URL = /** @class */ (function () {
    function URL() {
    }
    URL.citiesURL = "https://pkgstore.datahub.io/core/world-cities/world-cities_csv/data/6cc66692f0e82b18216a48443b6b95da/world-cities_csv.csv";
    URL.getCurrentWeatherURL = api + "data/2.5/";
    URL.getHourlyForcastURL = api + "data/2.5/";
    return URL;
}());



/***/ }),

/***/ "./src/app/modal/cities.ts":
/*!*********************************!*\
  !*** ./src/app/modal/cities.ts ***!
  \*********************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());



/***/ }),

/***/ "./src/app/summary/change-temperature.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/summary/change-temperature.pipe.ts ***!
  \****************************************************/
/*! exports provided: ChangeTemperaturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeTemperaturePipe", function() { return ChangeTemperaturePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeTemperaturePipe = /** @class */ (function () {
    function ChangeTemperaturePipe() {
    }
    ChangeTemperaturePipe.prototype.transform = function (value, unitOfMeasure) {
        console.log(value, unitOfMeasure);
        if (value && !isNaN(value)) {
            if (unitOfMeasure == "metric") {
                return value;
            }
            else if (unitOfMeasure == 'imperial') {
                var tempareature = (value * 9 / 5) + 32;
                return tempareature.toFixed(2);
            }
        }
        return;
    };
    ChangeTemperaturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'changeTemperature'
        })
    ], ChangeTemperaturePipe);
    return ChangeTemperaturePipe;
}());



/***/ }),

/***/ "./src/app/summary/main/main.component.scss":
/*!**************************************************!*\
  !*** ./src/app/summary/main/main.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/summary/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/summary/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _summary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../summary.service */ "./src/app/summary/summary.service.ts");
/* harmony import */ var _modal_cities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/cities */ "./src/app/modal/cities.ts");





var MainComponent = /** @class */ (function () {
    function MainComponent(summaryService, formBuilder) {
        this.summaryService = summaryService;
        this.formBuilder = formBuilder;
        this.sortedCities = [];
        this.selectedCityObj = [];
        this.apiKey = "a96b9faed450f23f316a8aaecd26cf74";
        this.units = "metric";
        this.forecastData = [];
        this.unitOfMeasure = "metric";
        this.isActiveMetric = true;
        this.isActiveImp = false;
        this.bufferSize = 50;
        this.numberOfItemsFromEndBeforeFetchingMore = 10;
        this.loading = false;
        this.p = 1;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.sortedCities = JSON.parse(localStorage.getItem('arrayOfCities'));
        this.initializeForm();
        this.getAllCitiesFn();
        this.loadInitialData();
        this.getHourlyForcastFn();
    };
    MainComponent.prototype.onChange = function ($event) {
        this.cityId = this.searchCityForm.get('cities').value;
        this.getSelectedCityId();
        this.getHourlyForcastFn();
    };
    MainComponent.prototype.initializeForm = function () {
        this.searchCityForm = this.formBuilder.group({
            cities: ["1248991"]
        });
    };
    MainComponent.prototype.loadInitialData = function () {
        var _this = this;
        var cityId = 1248991;
        var searchURL = "weather?id=" + cityId + "&units=" + this.units + "&appid=" + this.apiKey;
        this.summaryService.getCurrentWeather(searchURL).subscribe(function (data) {
            _this.currentWeatherData = [];
            var x = {
                temp: data.main.temp,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                speed: data.wind.speed,
                icon: data.weather[0].icon
            };
            _this.currentWeatherData.push(x);
        });
    };
    MainComponent.prototype.convertToMat = function () {
        this.unitOfMeasure = "metric";
        this.isActiveImp = false;
        this.isActiveMetric = true;
    };
    MainComponent.prototype.convertToImp = function () {
        this.unitOfMeasure = "imperial";
        this.isActiveImp = true;
        this.isActiveMetric = false;
    };
    MainComponent.prototype.getSelectedCityId = function () {
        var _this = this;
        var searchURL = "weather?id=" + this.cityId + "&units=" + this.units + "&appid=" + this.apiKey;
        console.log(searchURL);
        this.summaryService.getCurrentWeather(searchURL).subscribe(function (data) {
            _this.currentWeatherData = [];
            var x = {
                cityId: data.id,
                temp: data.main.temp,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                speed: data.wind.speed,
                icon: data.weather[0].icon
            };
            _this.currentWeatherData.push(x);
            var currentTime = Date.now();
            var getData = JSON.parse(localStorage.getItem('selectedCityObj')) || [];
            for (var i = 0; i < getData.length; i++) {
                var diffTimestamp = currentTime - getData[i].timestamp;
                if (diffTimestamp >= 600000) {
                    //getData.removeItem(getData[i].geonameid);
                    console.log(getData[i].id);
                }
            }
            // set timestamp to new object
            _this.currentWeatherData['timestamp'] = currentTime;
            getData.push(_this.currentWeatherData);
            localStorage.setItem('selectedCityObj', JSON.stringify(getData));
        });
    };
    MainComponent.prototype.getHourlyForcastFn = function () {
        var _this = this;
        var searchURL = "forecast?id=" + "1248991" + "&units=" + this.units + "&appid=" + this.apiKey;
        this.summaryService.getHourlyFocast(searchURL).subscribe(function (data) {
            _this.forecastData;
            for (var i = 1; i < data.list.length; i++) {
                var x = {
                    time: data.list[i].dt_txt,
                    clouds: data.list[i].clouds.all,
                    temp: data.list[i].main.temp,
                    humidity: data.list[i].main.humidity,
                    wind: data.list[i].wind.speed
                };
                _this.forecastData.push(x);
            }
            localStorage.setItem('selectedCityForecast', JSON.stringify(_this.forecastData));
            _this.collectionSize = _this.forecastData.length;
            return _this.forecastData.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
            });
        });
    };
    MainComponent.prototype.getAllCitiesFn = function () {
        var _this = this;
        this.summaryService.getAllCities().subscribe(function (data) {
            var csvRecordsArray = data.split(/\r\n|\n/);
            var headersRow = _this.getHeaderArray(csvRecordsArray);
            _this.records = _this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        });
    };
    MainComponent.prototype.getHeaderArray = function (csvRecordsArr) {
        var headers = csvRecordsArr[0].split(',');
        var headerArray = [];
        for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    };
    MainComponent.prototype.getDataRecordsArrayFromCSVFile = function (csvRecordsArray, headerLength) {
        this.citiesList = [];
        for (var i = 1; i < csvRecordsArray.length; i++) {
            var curruntRecord = csvRecordsArray[i].split(',');
            if (curruntRecord.length == headerLength) {
                var csvRecord = new _modal_cities__WEBPACK_IMPORTED_MODULE_4__["City"]();
                csvRecord.name = curruntRecord[0].trim();
                csvRecord.country = curruntRecord[1].trim();
                csvRecord.subcountry = curruntRecord[2].trim();
                csvRecord.geonameid = curruntRecord[3].trim();
                var x = {
                    name: csvRecord.name,
                    country: csvRecord.country,
                    subcountry: csvRecord.subcountry,
                    geonameid: csvRecord.geonameid
                };
                this.citiesList.push(x);
            }
        }
        this.citiesList.sort(function (a, b) {
            if (a.name > b.name)
                return 1;
            if (a.name < b.name)
                return -1;
            return 0;
        });
        localStorage.setItem('arrayOfCities', JSON.stringify(this.citiesList));
        //return this.citiesList;
        console.log(this.citiesList);
    };
    MainComponent.prototype.onScrollToEnd = function () {
        this.fetchMore();
    };
    MainComponent.prototype.onScroll = function (_a) {
        var end = _a.end;
        if (this.loading || this.sortedCities.length) {
            return;
        }
        if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.sortedCities.length) {
            this.fetchMore();
        }
    };
    MainComponent.prototype.fetchMore = function () {
        var _this = this;
        var len = this.sortedCities.length;
        var more = this.sortedCities.slice(len, this.bufferSize + len);
        this.loading = true;
        // using timeout here to simulate backend API delay
        setTimeout(function () {
            _this.loading = false;
            _this.sortedCities = _this.sortedCities.concat(more);
        }, 200);
    };
    MainComponent.ctorParameters = function () { return [
        { type: _summary_service__WEBPACK_IMPORTED_MODULE_3__["SummaryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/summary/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/summary/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.module.ts":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/*! exports provided: SummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _change_temperature_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-temperature.pipe */ "./src/app/summary/change-temperature.pipe.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/summary/main/main.component.ts");









var SummaryModule = /** @class */ (function () {
    function SummaryModule() {
    }
    SummaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _change_temperature_pipe__WEBPACK_IMPORTED_MODULE_7__["ChangeTemperaturePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ]
        })
    ], SummaryModule);
    return SummaryModule;
}());



/***/ }),

/***/ "./src/app/summary/summary.service.ts":
/*!********************************************!*\
  !*** ./src/app/summary/summary.service.ts ***!
  \********************************************/
/*! exports provided: SummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryService", function() { return SummaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const/url */ "./src/app/const/url.ts");





var SummaryService = /** @class */ (function () {
    function SummaryService(http) {
        this.http = http;
    }
    SummaryService.prototype.getAllCities = function () {
        return this.http.get(_const_url__WEBPACK_IMPORTED_MODULE_4__["URL"].citiesURL, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    SummaryService.prototype.getCurrentWeather = function (searchURL) {
        return this.http.get(_const_url__WEBPACK_IMPORTED_MODULE_4__["URL"].getCurrentWeatherURL + searchURL);
    };
    SummaryService.prototype.getHourlyFocast = function (searchURL) {
        return this.http.get(_const_url__WEBPACK_IMPORTED_MODULE_4__["URL"].getHourlyForcastURL + searchURL);
    };
    SummaryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SummaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SummaryService);
    return SummaryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gayani/Desktop/weather/git/weatherApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map