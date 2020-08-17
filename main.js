(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addjob/addjob.component.css":
/*!*********************************************!*\
  !*** ./src/app/addjob/addjob.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addjob/addjob.component.html":
/*!**********************************************!*\
  !*** ./src/app/addjob/addjob.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n<h2 style=\"text-align: center;border: 5px,5px;\">{{title}}</h2>\n<form  #f=\"ngForm\"  (ngSubmit)=\"postJob()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Job Name</label>\n    <input type=\"text\" class=\"form-control\"  name=\"job_name\" [(ngModel)]=\"job.jobName\" required=\"required\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Job name\">\n  </div>\n    \n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Description</label>\n    <textarea class=\"form-control\" name=\"job_description\" [(ngModel)]=\"job.jobDescription\" required=\"required\" placeholder=\"Description....\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n  </div>\n\n\n  <button  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/addjob/addjob.component.ts":
/*!********************************************!*\
  !*** ./src/app/addjob/addjob.component.ts ***!
  \********************************************/
/*! exports provided: AddjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddjobComponent", function() { return AddjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddjobComponent = /** @class */ (function () {
    function AddjobComponent(api, router) {
        this.api = api;
        this.router = router;
        this.title = 'Enter Job Detail';
        this.job = {
            jobId: 0,
            jobName: '',
            jobDescription: '',
            jobStatus: ''
        };
    }
    AddjobComponent.prototype.ngOnInit = function () {
    };
    AddjobComponent.prototype.postJob = function () {
        var _this = this;
        //     alert('aaaa');
        //    alert(this.job.jobName);
        //  alert(this.job.jobDescription);
        this.api.addJob(this.job).subscribe(function (res) {
            _this.api.setMainMessage('Job Added');
            _this.api.setSubMessage('Your Job has been Added Successfully.');
            _this.job.jobName = '';
            _this.job.jobDescription = '';
            _this.router.navigateByUrl('request-message');
        }, function (err) {
            _this.api.setMainMessage('Failed');
            _this.api.setSubMessage('Your New Job record failed to add. Please try again');
            _this.router.navigateByUrl('request-message');
        });
    };
    AddjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addjob',
            template: __webpack_require__(/*! ./addjob.component.html */ "./src/app/addjob/addjob.component.html"),
            styles: [__webpack_require__(/*! ./addjob.component.css */ "./src/app/addjob/addjob.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddjobComponent);
    return AddjobComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\r\n  <h1>Job Management</h1>\r\n  <p></p> \r\n</div>\r\n\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['']\" routerLinkActive=\"router-link-active\">Home</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/addjob']\" routerLinkActive=\"router-link-active\" >ADD JOB</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/joblist']\" routerLinkActive=\"router-link-active\" >JOB LIST</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/employee-list']\" routerLinkActive=\"router-link-active\" >EMPLOYEE LIST</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/assign-job']\" routerLinkActive=\"router-link-active\" >ASSIGN JOB</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/on-date-employee-job-detail']\" routerLinkActive=\"router-link-active\" >EMPLOYEE JOB DETAIL</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/my-jobs']\" routerLinkActive=\"router-link-active\" >EMPLOYEE JOBS</a>\r\n      </li> \r\n       <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/job-report']\" routerLinkActive=\"router-link-active\" >JOB REPORT</a>\r\n      </li>\r\n           \r\n    </ul>\r\n  </div>  \r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'JobManagement';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _naviagtion_naviagtion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./naviagtion/naviagtion.component */ "./src/app/naviagtion/naviagtion.component.ts");
/* harmony import */ var _addjob_addjob_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addjob/addjob.component */ "./src/app/addjob/addjob.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/joblist/joblist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updatejob_updatejob_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updatejob/updatejob.component */ "./src/app/updatejob/updatejob.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _employeeassignjob_employeeassignjob_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employeeassignjob/employeeassignjob.component */ "./src/app/employeeassignjob/employeeassignjob.component.ts");
/* harmony import */ var _employeejoblist_employeejoblist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employeejoblist/employeejoblist.component */ "./src/app/employeejoblist/employeejoblist.component.ts");
/* harmony import */ var _workingjob_workingjob_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workingjob/workingjob.component */ "./src/app/workingjob/workingjob.component.ts");
/* harmony import */ var _assignjob_assignjob_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assignjob/assignjob.component */ "./src/app/assignjob/assignjob.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./myjobs/myjobs.component */ "./src/app/myjobs/myjobs.component.ts");
/* harmony import */ var _assignjobtable_assignjobtable_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assignjobtable/assignjobtable.component */ "./src/app/assignjobtable/assignjobtable.component.ts");
/* harmony import */ var _jobstats_jobstats_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./jobstats/jobstats.component */ "./src/app/jobstats/jobstats.component.ts");
/* harmony import */ var _hometest_hometest_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hometest/hometest.component */ "./src/app/hometest/hometest.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    {
        path: 'joblist',
        component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_5__["JoblistComponent"]
    },
    {
        path: 'addjob',
        component: _addjob_addjob_component__WEBPACK_IMPORTED_MODULE_4__["AddjobComponent"]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'edit-job',
        component: _updatejob_updatejob_component__WEBPACK_IMPORTED_MODULE_9__["UpdatejobComponent"]
    },
    {
        path: 'employee-list',
        component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__["EmployeelistComponent"]
    },
    {
        path: 'employee-job-assign',
        component: _employeeassignjob_employeeassignjob_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeassignjobComponent"]
    },
    {
        path: 'employee-jobs',
        component: _employeejoblist_employeejoblist_component__WEBPACK_IMPORTED_MODULE_14__["EmployeejoblistComponent"]
    },
    {
        path: 'add-job-record',
        component: _workingjob_workingjob_component__WEBPACK_IMPORTED_MODULE_15__["WorkingjobComponent"]
    },
    {
        path: 'assign-job',
        component: _assignjob_assignjob_component__WEBPACK_IMPORTED_MODULE_16__["AssignjobComponent"]
    },
    {
        path: 'on-date-employee-job-detail',
        component: _assignjobtable_assignjobtable_component__WEBPACK_IMPORTED_MODULE_23__["AssignjobtableComponent"]
    },
    {
        path: 'request-message',
        component: _success_success_component__WEBPACK_IMPORTED_MODULE_21__["SuccessComponent"]
    },
    {
        path: 'my-jobs',
        component: _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_22__["MyjobsComponent"]
    },
    {
        path: 'job-report',
        component: _jobstats_jobstats_component__WEBPACK_IMPORTED_MODULE_24__["JobstatsComponent"]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _naviagtion_naviagtion_component__WEBPACK_IMPORTED_MODULE_3__["NaviagtionComponent"],
                _addjob_addjob_component__WEBPACK_IMPORTED_MODULE_4__["AddjobComponent"],
                _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_5__["JoblistComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                _updatejob_updatejob_component__WEBPACK_IMPORTED_MODULE_9__["UpdatejobComponent"],
                _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__["EmployeelistComponent"],
                _employeeassignjob_employeeassignjob_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeassignjobComponent"],
                _employeejoblist_employeejoblist_component__WEBPACK_IMPORTED_MODULE_14__["EmployeejoblistComponent"],
                _workingjob_workingjob_component__WEBPACK_IMPORTED_MODULE_15__["WorkingjobComponent"],
                _assignjob_assignjob_component__WEBPACK_IMPORTED_MODULE_16__["AssignjobComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_21__["SuccessComponent"],
                _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_22__["MyjobsComponent"],
                _assignjobtable_assignjobtable_component__WEBPACK_IMPORTED_MODULE_23__["AssignjobtableComponent"],
                _jobstats_jobstats_component__WEBPACK_IMPORTED_MODULE_24__["JobstatsComponent"],
                _hometest_hometest_component__WEBPACK_IMPORTED_MODULE_25__["HometestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignjob/assignjob.component.css":
/*!***************************************************!*\
  !*** ./src/app/assignjob/assignjob.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assignjob/assignjob.component.html":
/*!****************************************************!*\
  !*** ./src/app/assignjob/assignjob.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n<div class=\"alert alert-danger\" *ngIf=\"msgStatus\" role=\"alert\">\n  {{msgDisplay}}\n</div>\n<form #f=\"ngForm\"  (ngSubmit)=\"assignJob()\">\n  <div style=\"width: 20%\" class=\"form-group\">\n    <label for=\"exampleFormControlInput1\">Select Date</label>\n    <input type=\"date\" (change)=\"dateChange($event)\" name=\"date\" [(ngModel)]=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect1\">Select Employee</label>\n    <select class=\"form-control\" name=\"joblist\" [(ngModel)]=\"emp\" (ngModelChange)=\"onChangeObj($event)\"  id=\"exampleFormControlSelect1\">\n      <option  *ngFor=\"let employee of employees\" [ngValue]=\"employee\">{{employee.empName}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect2\">Example multiple Jobs</label>\n    <select name=\"jobList22\" [(ngModel)]=\"jobAdd\" (ngModelChange)=\"addJobList($event)\" multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n      <option  *ngFor=\"let job of joblist\" [ngValue]=\"job\">{{job.jobName}}</option>\n    </select>\n  </div>\n    <button type=\"submit\" class=\"btn btn-success\">Assign</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/assignjob/assignjob.component.ts":
/*!**************************************************!*\
  !*** ./src/app/assignjob/assignjob.component.ts ***!
  \**************************************************/
/*! exports provided: AssignjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignjobComponent", function() { return AssignjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignjobComponent = /** @class */ (function () {
    function AssignjobComponent(datePipe, api, router) {
        this.datePipe = datePipe;
        this.api = api;
        this.router = router;
        this.chooseDate = new Date();
        this.msgStatus = false;
        this.msgDisplay = '';
        this.joblist = [];
        this.jobAssign = {
            start: '',
            end: '',
            jobAssignId: 0,
            totalHours: 0,
            jobList: this.jobAdd,
            status: 'open',
            empId: 0
        };
        // alert('cons');
        this.date = this.datePipe.transform(this.chooseDate, 'yyyy-MM-dd');
        this.getEmployee();
        //    this.getJob();
    }
    AssignjobComponent.prototype.onChangeObj = function (emp) {
        console.log(emp);
        this.emp = emp;
        //    alert(emp.empId);
        this.getJob();
        // ... do other stuff here ...
    };
    AssignjobComponent.prototype.addJobList = function (job) {
        this.jobAdd.concat(job);
        //  alert(this.jobAdd.length);
    };
    AssignjobComponent.prototype.getEmployee = function () {
        var _this = this;
        this.api.allEmployee().subscribe(function (res) {
            _this.employees = res;
            _this.emp = _this.employees[0];
        }, function (err) {
            alert('Error in network  connection..');
        });
    };
    AssignjobComponent.prototype.getJob = function () {
        var _this = this;
        this.api.employeeSpecificJob(this.emp.empId, this.date).subscribe(function (res) {
            _this.joblist = res;
            _this.job = _this.joblist[0];
        }, function (err) {
            alert('Cant make request');
        });
    };
    AssignjobComponent.prototype.dateChange = function (event) {
        this.getJob();
    };
    // this method will post the selected jobs to the particular employee....
    AssignjobComponent.prototype.assignJob = function () {
        var _this = this;
        if (this.jobAdd.length === 0) {
            this.msgStatus = true;
            this.msgDisplay = 'Please Select Atleast One Job to Assign ' + this.emp.empName;
        }
        else {
            this.jobAssign.start = this.date;
            this.jobAssign.end = this.date;
            this.jobAssign.jobList = this.jobAdd;
            this.jobAssign.empId = this.emp.empId;
            this.jobAssign.status = 'open';
            this.api.assignJob(this.jobAssign).subscribe(function (res) {
                // this.job();
                _this.api.setMainMessage('Job Assigned');
                _this.api.setSubMessage('Your Job has been assign Successfully.');
                _this.router.navigateByUrl('request-message');
                // location.reload();
            }, function (err) {
                alert('can not assign job...plz try after some time....');
            });
        }
    };
    AssignjobComponent.prototype.ngOnInit = function () {
        // alert(this.chooseDate);
        // alert(this.date);
        console.log(this.chooseDate);
        console.log(this.date);
        //   alert('init');
        //  this.getEmployee();
    };
    AssignjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assignjob',
            template: __webpack_require__(/*! ./assignjob.component.html */ "./src/app/assignjob/assignjob.component.html"),
            styles: [__webpack_require__(/*! ./assignjob.component.css */ "./src/app/assignjob/assignjob.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AssignjobComponent);
    return AssignjobComponent;
}());



/***/ }),

/***/ "./src/app/assignjobtable/assignjobtable.component.css":
/*!*************************************************************!*\
  !*** ./src/app/assignjobtable/assignjobtable.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/assignjobtable/assignjobtable.component.html":
/*!**************************************************************!*\
  !*** ./src/app/assignjobtable/assignjobtable.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n<button style=\"width: 100%;padding: 20px;font-size:30px\" type=\"button\" class=\"btn btn-success\">JOB ASSIGN LIST ON : {{date}}</button>\n<br>\n<button style=\"width: 100%;padding: 20px;font-size:20px\" type=\"button\" class=\"btn btn-primary\">No. of Assign Employee : {{jobView.length}}</button>\n<div class=\"form-group\" style=\"width: 20%\">\n    <label for=\"exampleFormControlInput1\">Select Date</label>\n    <input type=\"date\" (change)=\"dateChange($event)\" name=\"date\" [(ngModel)]=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div>\n\n<table mat-table\n       [dataSource]=\"jobView\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay; let i = index\">\n    <th mat-header-cell *matHeaderCellDef> {{toDisplay[i]}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[toobj[i]][todata[i]]}} </td>\n  </ng-container>\n\n\n\n\n\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n       <table class=\"table table-sm\">\n        <thead>\n        <tr>\n        <th scope=\"col\">Job Name</th>\n        <th scope=\"col\">Job Description</th>\n        <th scope=\"col\">Work Status</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let j of element.jobs\">\n        <td scope=\"col\">{{j.jobName}}</td>\n        <td scope=\"col\">{{j.jobDescription}}</td>\n        <td scope=\"col\">{{j.jobStatus}}</td>\n        </tr>\n        </tbody>\n        </table>\n\n        \n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n</div>\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/assignjobtable/assignjobtable.component.ts":
/*!************************************************************!*\
  !*** ./src/app/assignjobtable/assignjobtable.component.ts ***!
  \************************************************************/
/*! exports provided: AssignjobtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignjobtableComponent", function() { return AssignjobtableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignjobtableComponent = /** @class */ (function () {
    function AssignjobtableComponent(datePipe, api) {
        this.datePipe = datePipe;
        this.api = api;
        this.chooseDate = new Date();
        this.toDisplay = ['Employee Name', 'Contact No.', 'No. of Jobs'];
        this.todata = ['empName', 'contact', 'length'];
        this.toobj = ['employee', 'employee', 'jobs'];
        this.columnsToDisplay = ['.employee.empName', 'contact', 'jobs.length'];
        this.date = this.datePipe.transform(this.chooseDate, 'yyyy-MM-dd');
        this.getData();
    }
    AssignjobtableComponent.prototype.dateChange = function (event) {
        // this.date = event;
        alert(this.date);
        this.getData();
    };
    AssignjobtableComponent.prototype.getData = function () {
        var _this = this;
        this.api.getJobByDate(this.date).subscribe(function (res) {
            _this.jobView = res;
        }, function (err) {
            alert('cant make network reqquest');
        });
    };
    AssignjobtableComponent.prototype.ngOnInit = function () {
    };
    AssignjobtableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assignjobtable',
            template: __webpack_require__(/*! ./assignjobtable.component.html */ "./src/app/assignjobtable/assignjobtable.component.html"),
            styles: [__webpack_require__(/*! ./assignjobtable.component.css */ "./src/app/assignjobtable/assignjobtable.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__["RestapiService"]])
    ], AssignjobtableComponent);
    return AssignjobtableComponent;
}());



/***/ }),

/***/ "./src/app/employeeassignjob/employeeassignjob.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employeeassignjob/employeeassignjob.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employeeassignjob/employeeassignjob.component.html":
/*!********************************************************************!*\
  !*** ./src/app/employeeassignjob/employeeassignjob.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}} : {{name}}</h2>\n  <h2></h2>\n  \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Job Id</th>\n        <th>Job Name</th>\n        <th>Job Description</th>\n         <th>Start date</th>\n         <th>End date</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let job of joblist\">\n        <td>{{job.jobId}}</td>\n        <td>{{job.jobName}}</td>\n        <td>{{job.jobDescription}}</td>\n        <td><input [(ngModel)]=\"start\" name=\"start_date\" type=\"date\"></td>\n        <td><input  [(ngModel)]=\"end\" name=\"date_date\" type=\"date\"></td>\n        \n        <td><button type=\"button\" (click)=\"assignJob(job)\" class=\"btn btn-primary active\">Assign</button></td>\n       \n      </tr>\n      \n    </tbody>\n  \n  </table>\n \n</div>\n "

/***/ }),

/***/ "./src/app/employeeassignjob/employeeassignjob.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employeeassignjob/employeeassignjob.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeassignjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeassignjobComponent", function() { return EmployeeassignjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeassignjobComponent = /** @class */ (function () {
    function EmployeeassignjobComponent(api) {
        this.api = api;
        this.title = 'Jobs To Assign';
        this.name = '';
        this.joblist = [];
        this.emp = api.getEmployee();
        this.name = this.emp.empName;
        alert(this.emp.empName);
        this.jobAssign.empId = this.emp.empId;
    }
    EmployeeassignjobComponent.prototype.ngOnInit = function () {
        this.getJob();
    };
    EmployeeassignjobComponent.prototype.getJob = function () {
        var _this = this;
        this.api.employeeSpecificJob(this.emp.empId, this.date).subscribe(function (res) {
            _this.joblist = res;
        }, function (err) {
            alert('Cant make request');
        });
    };
    EmployeeassignjobComponent.prototype.assignJob = function (job) {
        var _this = this;
        this.jobAssign.start = this.start;
        this.jobAssign.end = this.end;
        this.jobAssign.totalHours = 0;
        this.api.assignJob(this.jobAssign).subscribe(function (res) {
            _this.getJob();
            // location.reload();
        }, function (err) {
            alert('can not assign job...plz try after some time....');
        });
    };
    EmployeeassignjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeeassignjob',
            template: __webpack_require__(/*! ./employeeassignjob.component.html */ "./src/app/employeeassignjob/employeeassignjob.component.html"),
            styles: [__webpack_require__(/*! ./employeeassignjob.component.css */ "./src/app/employeeassignjob/employeeassignjob.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"]])
    ], EmployeeassignjobComponent);
    return EmployeeassignjobComponent;
}());



/***/ }),

/***/ "./src/app/employeejoblist/employeejoblist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employeejoblist/employeejoblist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employeejoblist/employeejoblist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/employeejoblist/employeejoblist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}}:{{emp.empName}}</h2>\n  <h2></h2>\n  \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Assign Id</th>\n        <th>Job Name</th>\n        <th>Job Description</th>\n         <th>Start date</th>\n         <th>End date</th>\n          <th>Total Work(hr)</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let empjob of employeejobmodel\">\n        <td>{{empjob.assignDto.jobAssignId}}</td>\n        <td>{{empjob.jobDto.jobName}}</td>\n        <td>{{empjob.jobDto.jobDescription}}</td>\n        <td>{{empjob.assignDto.start}}</td>\n        <td>{{empjob.assignDto.end}}</td>\n        <td>{{empjob.assignDto.totalHours}}</td>\n       \n        \n        <td><button type=\"button\" (click)=\"workingDetail(empjob)\" class=\"btn btn-primary active\">Enter Work</button></td>\n       \n      </tr>\n      \n    </tbody>\n  \n  </table>\n \n</div>\n "

/***/ }),

/***/ "./src/app/employeejoblist/employeejoblist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employeejoblist/employeejoblist.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeejoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeejoblistComponent", function() { return EmployeejoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeejoblistComponent = /** @class */ (function () {
    function EmployeejoblistComponent(api, router) {
        this.api = api;
        this.router = router;
        this.employeejobmodel = [];
        this.emp = this.api.getEmployee();
    }
    EmployeejoblistComponent.prototype.ngOnInit = function () {
        this.getEmployeejob();
    };
    EmployeejoblistComponent.prototype.workingDetail = function (empJob) {
        //  this.api.setWorkingJob(empJob);
        this.api.setAssignId(empJob.assignDto.jobAssignId);
        this.router.navigateByUrl('add-job-record');
    };
    EmployeejoblistComponent.prototype.getEmployeejob = function () {
        var _this = this;
        this.api.getAllEmployeeAssignJob(this.emp).subscribe(function (res) {
            _this.employeejobmodel = res;
            alert(_this.employeejobmodel.length);
        }, function (err) {
            alert('can not make employee specific job call');
        });
    };
    EmployeejoblistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeejoblist',
            template: __webpack_require__(/*! ./employeejoblist.component.html */ "./src/app/employeejoblist/employeejoblist.component.html"),
            styles: [__webpack_require__(/*! ./employeejoblist.component.css */ "./src/app/employeejoblist/employeejoblist.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeejoblistComponent);
    return EmployeejoblistComponent;
}());



/***/ }),

/***/ "./src/app/employeelist/employeelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}}</h2>\n  \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Emp Id</th>\n        <th>Emp Name</th>\n        <th>Emp Contact</th>\n        <!--\n        <th>No. of job Assign</th>\n        <th>Assign Job</th>\n        <th>View Jobs</th>\n\n        -->\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let emp of emplist\">\n        <td>{{emp.empId}}</td>\n        <td>{{emp.empName}}</td>\n        <td>{{emp.contact}}</td>\n        <!--\n         <td>{{emp.noOfJobAssigned}}</td>\n         \n        <td><button type=\"button\" (click)=\"assignNewJob(emp)\" class=\"btn btn-primary active\">Assign Job</button></td>\n       <td><button type=\"button\" (click)=\"viewJobs(emp)\" class=\"btn btn-primary active\">View jobs</button></td>\n       -->\n      </tr>\n      \n    </tbody>\n  \n  </table>\n\n</div>\n "

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(api, route) {
        this.api = api;
        this.route = route;
        this.emplist = [];
    }
    EmployeelistComponent.prototype.assignNewJob = function (emp) {
        this.api.setEmployee(emp);
        this.route.navigateByUrl('employee-job-assign');
    };
    EmployeelistComponent.prototype.viewJobs = function (emp) {
        this.api.setEmployee(emp);
        this.route.navigateByUrl('employee-jobs');
    };
    EmployeelistComponent.prototype.ngOnInit = function () {
        this.getAllEmployee();
    };
    EmployeelistComponent.prototype.getAllEmployee = function () {
        var _this = this;
        this.api.allEmployee().subscribe(function (res) {
            _this.emplist = res;
        }, function (err) {
            alert('Can.t make request');
        });
    };
    EmployeelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeelist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employeelist/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.css */ "./src/app/employeelist/employeelist.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());



/***/ }),

/***/ "./src/app/hometest/hometest.component.css":
/*!*************************************************!*\
  !*** ./src/app/hometest/hometest.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hometest/hometest.component.html":
/*!**************************************************!*\
  !*** ./src/app/hometest/hometest.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/hometest/hometest.component.ts":
/*!************************************************!*\
  !*** ./src/app/hometest/hometest.component.ts ***!
  \************************************************/
/*! exports provided: HometestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HometestComponent", function() { return HometestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HometestComponent = /** @class */ (function () {
    function HometestComponent() {
    }
    HometestComponent.prototype.ngOnInit = function () {
    };
    HometestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hometest',
            template: __webpack_require__(/*! ./hometest.component.html */ "./src/app/hometest/hometest.component.html"),
            styles: [__webpack_require__(/*! ./hometest.component.css */ "./src/app/hometest/hometest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HometestComponent);
    return HometestComponent;
}());



/***/ }),

/***/ "./src/app/joblist/joblist.component.css":
/*!***********************************************!*\
  !*** ./src/app/joblist/joblist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/joblist/joblist.component.html":
/*!************************************************!*\
  !*** ./src/app/joblist/joblist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}}</h2>\n  \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Job Id</th>\n        <th>Job Name</th>\n        <th>Job Description</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let job of joblist\">\n        <td>{{job.jobId}}</td>\n        <td>{{job.jobName}}</td>\n        <td>{{job.jobDescription}}</td>\n        <td><button type=\"button\" (click)=\"editJob(job)\" class=\"btn btn-primary active\">Edit</button></td>\n       \n      </tr>\n      \n    </tbody>\n  \n  </table>\n    <ul class=\"pagination\">\n  \n \n  <li class=\"page-item\"*ngFor=\"let p of pages; let i=index\">\n      <a class=\"page-link\"  (click)=\"setPage(i,$event)\" >{{i+1}}</a>\n    </li>\n  \n\n  \n</ul>\n</div>\n "

/***/ }),

/***/ "./src/app/joblist/joblist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/joblist/joblist.component.ts ***!
  \**********************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoblistComponent = /** @class */ (function () {
    function JoblistComponent(api, route) {
        this.api = api;
        this.route = route;
        this.title = 'All Job';
        this.joblist = [];
        this.page = 0;
    }
    JoblistComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    JoblistComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        this.page = i;
        this.getAll();
    };
    JoblistComponent.prototype.getAll = function () {
        var _this = this;
        this.api.getAllJob(this.page).subscribe(function (res) {
            _this.joblist = res['content'];
            _this.pages = new Array(res['totalPages']);
            //  alert('from the resoftotalPages' + res['totalPages']);
            // alert('store of pages array ' + this.pages.length);
            _this.currentpage = res['pageable']['pageNumber'];
            // alert('currentpages   ' + this.currentpage);
            console.log('HI');
        }, function (err) {
            alert('Can\'t make request');
        });
    };
    JoblistComponent.prototype.editJob = function (j) {
        this.api.setJob(j);
        this.route.navigateByUrl('edit-job');
    };
    JoblistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! ./joblist.component.html */ "./src/app/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.css */ "./src/app/joblist/joblist.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ }),

/***/ "./src/app/jobstats/jobstats.component.css":
/*!*************************************************!*\
  !*** ./src/app/jobstats/jobstats.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/jobstats/jobstats.component.html":
/*!**************************************************!*\
  !*** ./src/app/jobstats/jobstats.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n<button style=\"width: 100%;padding: 20px;font-size:30px\" type=\"button\" class=\"btn btn-success\">Report From {{date1}} to {{date2}}</button>\n<div class=\"form-group\" style=\"width: 20%\">\n    <label for=\"exampleFormControlInput1\">From Date </label>\n    <input type=\"date\"  name=\"date\" [(ngModel)]=\"date1\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div>\n\n <div class=\"form-group\" style=\"width: 20%\">\n    <label for=\"exampleFormControlInput1\">To Date</label>\n    <input type=\"date\"  name=\"date\" [(ngModel)]=\"date2\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div> \n\n  <button style=\"padding: 10px\" (click)=\"getReport($event)\" type=\"button\" class=\"btn btn-primary btn-lg\">Get Report</button>\n\n<table mat-table\n       [dataSource]=\"jobStats\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay; let i = index\">\n    <th mat-header-cell *matHeaderCellDef> {{toDisplay[i]}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[toobj[i]]}} </td>\n  </ng-container>\n\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n       <table class=\"table table-sm\">\n        <thead>\n        <tr>\n        <th scope=\"col\">Job Name</th>\n        <th scope=\"col\">Job Description</th>\n        <th scope=\"col\">Assign Date</th>\n        <th scope=\"col\">Work Status</th>\n        <th scope=\"col\">Hour Spent</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let j of element.jobs\">\n        <td scope=\"col\">{{j.jobName}}</td>\n        <td scope=\"col\">{{j.jobDescription}}</td>\n        <td scope=\"col\">{{j.assignDate}}</td>\n        <td scope=\"col\">{{j.jobStatus}}</td>\n        <td scope=\"col\">{{j.hourSpent}}</td>\n        </tr>\n        </tbody>\n        </table>\n\n        \n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n</div>\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/jobstats/jobstats.component.ts":
/*!************************************************!*\
  !*** ./src/app/jobstats/jobstats.component.ts ***!
  \************************************************/
/*! exports provided: JobstatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobstatsComponent", function() { return JobstatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobstatsComponent = /** @class */ (function () {
    function JobstatsComponent(datePipe, api) {
        this.datePipe = datePipe;
        this.api = api;
        this.chooseDate = new Date();
        this.toDisplay = ['Employee Name', 'Contact No.', 'Total Jobs', 'Total Work(hour)'];
        this.todata = ['empName', 'contact', 'length'];
        this.toobj = ['empName', 'empContact', 'noOfJobs', 'totaHourWork'];
        this.columnsToDisplay = ['.employee.empName', 'contact', 'jobs.length', 'jobs.tss'];
        this.date1 = this.datePipe.transform(this.chooseDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(this.chooseDate, 'yyyy-MM-dd');
        this.getDate();
    }
    JobstatsComponent.prototype.getReport = function (data) {
        this.getDate();
    };
    JobstatsComponent.prototype.getDate = function () {
        var _this = this;
        this.api.getJobStats(this.date1, this.date2).subscribe(function (res) {
            _this.jobStats = res;
        }, function (err) {
            alert('can not make network');
        });
    };
    JobstatsComponent.prototype.ngOnInit = function () {
    };
    JobstatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobstats',
            template: __webpack_require__(/*! ./jobstats.component.html */ "./src/app/jobstats/jobstats.component.html"),
            styles: [__webpack_require__(/*! ./jobstats.component.css */ "./src/app/jobstats/jobstats.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__["RestapiService"]])
    ], JobstatsComponent);
    return JobstatsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n\n\n    \n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Select Authorization</label>\n    <select class=\"form-control\">\n  <option>Default select</option>\n</select>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myjobs/myjobs.component.css":
/*!*********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/myjobs/myjobs.component.html":
/*!**********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\r\n\r\n<div style=\"width: 20%\" class=\"form-group\">\r\n    <label for=\"exampleFormControlInput1\">Select Date</label>\r\n    <input type=\"date\" (ngModelChange)=\"getDate()\" name=\"date\" [(ngModel)]=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\r\n  </div>\r\n\r\n <div class=\"form-group\">\r\n    <label for=\"exampleFormControlSelect1\">Select Employee</label>\r\n    <select class=\"form-control\" name=\"joblist\"  [(ngModel)]=\"emp\" (ngModelChange)=\"onChangeObj($event)\"  id=\"exampleFormControlSelect1\">\r\n      <option  *ngFor=\"let employee of employees\" [ngValue]=\"employee\">{{employee.empName}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Assign Id</th>\r\n        <th>Job Name</th>\r\n        <th>Job Description</th>\r\n        <th>Assign Status</th>\r\n        <th>Total (Hour)</th>\r\n        <th>Date</th>\r\n        <th>Work Hour</th>\r\n        <th>Choose Status</th>\r\n         <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let j of employeeJob\">\r\n        <td>{{j.assignDto.jobAssignId}}</td>\r\n        <td>{{j.jobDto.jobName}}</td>\r\n        <td>{{j.jobDto.jobDescription}}</td>\r\n        <td>{{j.assignDto.status}}</td>\r\n        <td>{{j.assignDto.totalHours}}</td>\r\n        <td><input class=\"form-control\" name=\"date22\"  [(ngModel)]=\"j.workDate\" required=\"required\" type=\"date\"></td>\r\n        <td><input type=\"number\" placeholder=\"Enter work hour..\" name=\"hours\" [(ngModel)]=\"j.workhour\"></td>\r\n        \r\n        <td>\r\n    <select  name=\"test\" [(ngModel)]=\"j.assignDto.status\" class=\"form-control form-control-sm\">\r\n        <option value=\"pending\">Pending</option>\r\n         <option value=\"close\">Close</option>\r\n    </select>\r\n        \r\n        </td>\r\n         <td><button type=\"button\" (click)=\"enterWork(j)\" class=\"btn btn-primary active\">Submit</button></td>\r\n       \r\n      </tr>\r\n      \r\n    </tbody>\r\n  \r\n  </table>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/myjobs/myjobs.component.ts":
/*!********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.ts ***!
  \********************************************/
/*! exports provided: MyjobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsComponent", function() { return MyjobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyjobsComponent = /** @class */ (function () {
    function MyjobsComponent(datePipe, api) {
        this.datePipe = datePipe;
        this.api = api;
        this.chooseDate = new Date();
        this.jobrecord = {
            date: '',
            hourSpent: 0,
            assignId: 0,
            workId: 0,
            jobStatus: 'pending'
        };
        this.date = this.datePipe.transform(this.chooseDate, 'yyyy-MM-dd');
        this.getEmployee();
    }
    MyjobsComponent.prototype.onChangeObj = function (emp) {
        console.log(emp);
        this.emp = emp;
        alert(emp.empId);
        this.getMyJobs();
        // ... do other stuff here ...
    };
    MyjobsComponent.prototype.getDate = function () {
        this.getMyJobs();
    };
    MyjobsComponent.prototype.enterWork = function (emp) {
        var _this = this;
        this.jobrecord.jobStatus = emp.assignDto.status;
        this.jobrecord.assignId = emp.assignDto.jobAssignId;
        this.jobrecord.date = emp.workDate;
        this.jobrecord.hourSpent = emp.workhour;
        this.api.addWorkingHour2(this.jobrecord).subscribe(function (res) {
            _this.jobrecord = res;
            _this.getMyJobs();
        }, function (err) {
            alert('can add working detail....plz try again');
        });
    };
    MyjobsComponent.prototype.getMyJobs = function () {
        var _this = this;
        this.api.getAllEmployeeAssignJob2(this.emp, this.date).subscribe(function (res) {
            _this.employeeJob = res;
        }, function (err) {
            alert('cant make network call');
        });
    };
    MyjobsComponent.prototype.getEmployee = function () {
        var _this = this;
        this.api.allEmployee().subscribe(function (res) {
            _this.employees = res;
            _this.emp = _this.employees[0];
        }, function (err) {
            alert('Error in network  connection..');
        });
    };
    MyjobsComponent.prototype.ngOnInit = function () {
    };
    MyjobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myjobs',
            template: __webpack_require__(/*! ./myjobs.component.html */ "./src/app/myjobs/myjobs.component.html"),
            styles: [__webpack_require__(/*! ./myjobs.component.css */ "./src/app/myjobs/myjobs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _shared_restapi_service__WEBPACK_IMPORTED_MODULE_2__["RestapiService"]])
    ], MyjobsComponent);
    return MyjobsComponent;
}());



/***/ }),

/***/ "./src/app/naviagtion/naviagtion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/naviagtion/naviagtion.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/naviagtion/naviagtion.component.html":
/*!******************************************************!*\
  !*** ./src/app/naviagtion/naviagtion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\n  <h1>My First Bootstrap 4 Page</h1>\n  <p>Resize this responsive page to see the effect!</p> \n</div>\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>    \n    </ul>\n  </div>  \n</nav>"

/***/ }),

/***/ "./src/app/naviagtion/naviagtion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/naviagtion/naviagtion.component.ts ***!
  \****************************************************/
/*! exports provided: NaviagtionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviagtionComponent", function() { return NaviagtionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NaviagtionComponent = /** @class */ (function () {
    function NaviagtionComponent() {
    }
    NaviagtionComponent.prototype.ngOnInit = function () {
    };
    NaviagtionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-naviagtion',
            template: __webpack_require__(/*! ./naviagtion.component.html */ "./src/app/naviagtion/naviagtion.component.html"),
            styles: [__webpack_require__(/*! ./naviagtion.component.css */ "./src/app/naviagtion/naviagtion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NaviagtionComponent);
    return NaviagtionComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404 Page Not Found</h2>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/restapi.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/restapi.service.ts ***!
  \*******************************************/
/*! exports provided: RestapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestapiService", function() { return RestapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestapiService = /** @class */ (function () {
    function RestapiService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8080/api';
        this.listjoburl = this.BASE_URL + '/pg-jobs';
        this.updateurl = this.BASE_URL + '/update-job';
        this.addjoburl = this.BASE_URL + '/jobsave';
        this.allemployeeurl = this.BASE_URL + '/all-employee';
        this.employeespecificjoburl = this.BASE_URL + '/employee-job-assign';
        this.assignempjoburl = this.BASE_URL + '/assign-new-job';
        this.employeeassignjoburl = this.BASE_URL + '/get-assign-job/';
        this.employeeassignjoburl2 = this.BASE_URL + '/get-assign-jobs/';
        this.addWorkingJobUrl = this.BASE_URL + '/add-working-hour';
        this.addWorkingJobUrl2 = this.BASE_URL + '/add-job-hour';
        this.jobsBydate = this.BASE_URL + '/jobs-on-dated';
        this.getStatsUrl = this.BASE_URL + '/get-job-stats';
    }
    // request for get work stats
    RestapiService.prototype.getJobStats = function (start, end) {
        return this.http.get(this.getStatsUrl + '?start=' + start + '&end=' + end);
    };
    // Get jobs of Employee by Date
    RestapiService.prototype.getJobByDate = function (date) {
        return this.http.get(this.jobsBydate + '?date=' + date);
    };
    // This will post the job Working
    RestapiService.prototype.addWorkingHour = function (workingJob) {
        return this.http.post(this.addWorkingJobUrl, workingJob);
    };
    RestapiService.prototype.addWorkingHour2 = function (job) {
        return this.http.post(this.addWorkingJobUrl2, job);
    };
    RestapiService.prototype.getAllEmployeeAssignJob = function (emp) {
        return this.http.get(this.employeeassignjoburl + emp.empId);
    };
    // This request will return the employee jobs open at date by empid
    RestapiService.prototype.getAllEmployeeAssignJob2 = function (emp, date) {
        return this.http.get(this.employeeassignjoburl2 + emp.empId + '/' + date);
    };
    RestapiService.prototype.getAllJob = function (page) {
        return this.http.get(this.listjoburl + '?pg=' + page);
    };
    // This will assign the multiple jobs to the employee at a time....
    RestapiService.prototype.assignJob = function (jobassign) {
        return this.http.post(this.assignempjoburl, jobassign);
    };
    RestapiService.prototype.employeeSpecificJob = function (empId, date) {
        return this.http.get(this.employeespecificjoburl + '?empId=' + empId + '&date=' + date);
    };
    RestapiService.prototype.updateJob = function (job) {
        return this.http.put(this.updateurl, job);
    };
    RestapiService.prototype.allEmployee = function () {
        return this.http.get(this.allemployeeurl);
    };
    RestapiService.prototype.addJob = function (job) {
        return this.http.post(this.addjoburl, job);
    };
    RestapiService.prototype.setJob = function (j) {
        this.job = j;
    };
    RestapiService.prototype.getJob = function () {
        return this.job;
    };
    RestapiService.prototype.setEmployee = function (emp) {
        this.emp = emp;
    };
    RestapiService.prototype.getEmployee = function () {
        return this.emp;
    };
    RestapiService.prototype.setEmpId = function (empId) {
        this.empId = empId;
    };
    RestapiService.prototype.getEmpId = function () {
        return this.empId;
    };
    RestapiService.prototype.setWorkingJob = function (workJob) {
        this.workJob = workJob;
    };
    RestapiService.prototype.getWorkingJob = function () {
        return this.workJob;
    };
    RestapiService.prototype.setAssignId = function (assignId) {
        this.assignId = assignId;
    };
    RestapiService.prototype.getAssignId = function () {
        return this.assignId;
    };
    RestapiService.prototype.setMainMessage = function (msg) {
        this.mainMessage = msg;
    };
    RestapiService.prototype.getMainMessage = function () {
        return this.mainMessage;
    };
    RestapiService.prototype.setSubMessage = function (sub) {
        this.subMessage = sub;
    };
    RestapiService.prototype.getSubMessage = function () {
        return this.subMessage;
    };
    RestapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestapiService);
    return RestapiService;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-xs-center\">\n  <h1 class=\"display-3\" >{{mainMessage}}</h1>\n  <p class=\"lead\"><strong>{{subMessage}}</strong></p>\n  <hr>\n  <p>\n    Having trouble? <a href=\"\">Contact us</a>\n  </p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/addjob']\" role=\"button\">Add Job</a>\n  </p>\n   <p class=\"lead\">\n    <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/joblist']\" role=\"button\">Job List</a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(api) {
        this.api = api;
        this.mainMessage = this.api.getMainMessage();
        this.subMessage = this.api.getSubMessage();
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.element-row {\r\n  position: relative;\r\n}\r\n\r\n.element-row:not(.expanded) {\r\n  cursor: pointer;\r\n}\r\n\r\n.element-row:not(.expanded):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.element-row.expanded {\r\n  border-bottom-color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button style=\"width: 100%;padding: 20px\" type=\"button\" class=\"btn btn-info\">Job Assign</button>\n<div class=\"form-group\">\n    <label for=\"exampleFormControlInput1\">Select Date</label>\n    <input type=\"date\" (change)=\"dateChange($event)\" name=\"date\" [(ngModel)]=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div>\n\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"jobView\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"Employee Name\">\n      <mat-header-cell *matHeaderCellDef> Employee Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.employee.empName}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Contact No.\">\n      <mat-header-cell *matHeaderCellDef> Contact No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.employee.contact}} </mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"No. of Jobs\">\n      <mat-header-cell *matHeaderCellDef> No. of Jobs </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.jobs.length}} </mat-cell>\n    </ng-container>\n\n    <!-- Expanded Content Column - The detail row is made up of this one column -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <mat-cell *matCellDef=\"let detail\"> \n\n\n<table class=\"table table-sm\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Job Name</th>\n      <th scope=\"col\">Job Description</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr>\n      <td scope=\"col\">Job Name</td>\n      <td scope=\"col\">Job Description</td>\n    </tr>\n     </tbody>\n</table>\n\n       \n     \n</mat-cell>\n</ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n            matRipple \n            class=\"element-row\" \n            [class.expanded]=\"expandedElement == row\"\n            (click)=\"expandedElement = row\"></mat-row>\n    <mat-row *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\"\n            [@detailExpand]=\"row.element == expandedElement ? 'expanded' : 'collapsed'\"\n            style=\"overflow: hidden\"> \n    </mat-row>\n  </mat-table>\n</div>\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent(datePipe, api) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        _this.api = api;
        _this.displayedColumns = ['Employee Name', 'Contact No.', 'No. of Jobs'];
        _this.number = new Array(5);
        _this.chooseDate = new Date();
        _this.isExpansionDetailRow = function (i, row) { return row.hasOwnProperty('detailRow'); };
        _this.date = _this.datePipe.transform(_this.chooseDate, 'yyyy-MM-dd');
        _this.getData();
        return _this;
    }
    TableComponent.prototype.dateChange = function (event) {
        // this.date = event;
        alert(this.date);
        this.getData();
    };
    TableComponent.prototype.getData = function () {
        var _this = this;
        this.api.getJobByDate(this.date).subscribe(function (res) {
            _this.jobView = res;
        }, function (err) {
            alert('cant make network reqquest');
        });
    };
    TableComponent.prototype.connect = function () {
        var rows = [];
        this.jobView.forEach(function (element) { return rows.push(element.jobs, { detailRow: true, element: element }); });
        console.log(rows);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(rows);
    };
    TableComponent.prototype.disconnect = function () { };
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _shared_restapi_service__WEBPACK_IMPORTED_MODULE_5__["RestapiService"]])
    ], TableComponent);
    return TableComponent;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));

var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/updatejob/updatejob.component.css":
/*!***************************************************!*\
  !*** ./src/app/updatejob/updatejob.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updatejob/updatejob.component.html":
/*!****************************************************!*\
  !*** ./src/app/updatejob/updatejob.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n<h2 style=\"text-align: center;border: 5px,5px;\">{{title}}</h2>\n<h4 style=\"text-align: center;color: red\" *ngIf=\"status\">{{message}}</h4>\n<form #f=\"ngForm\"  (ngSubmit)=\"updateJob()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Job Name</label>\n    <input type=\"text\"name=\"jobname\" [(ngModel)]=\"jobModel.jobName\" required=\"required\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" >\n    \n</div>\n    \n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Description</label>\n    <textarea class=\"form-control\" name=\"jobdescription\" required=\"required\" [(ngModel)]=\"jobModel.jobDescription\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n  </div>\n\n\n  <button type=\"Update\" class=\"btn btn-primary\">Submit</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/updatejob/updatejob.component.ts":
/*!**************************************************!*\
  !*** ./src/app/updatejob/updatejob.component.ts ***!
  \**************************************************/
/*! exports provided: UpdatejobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatejobComponent", function() { return UpdatejobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatejobComponent = /** @class */ (function () {
    function UpdatejobComponent(api, router) {
        this.api = api;
        this.router = router;
        this.title = 'EDIT JOB DETAIL';
        this.message = '';
        this.status = false;
        this.jobModel = {
            jobId: 0,
            jobName: '',
            jobDescription: '',
            jobStatus: ''
        };
        this.job = this.api.getJob();
        this.jobModel.jobId = this.job.jobId;
        this.jobModel.jobName = this.job.jobName;
        this.jobModel.jobDescription = this.job.jobDescription;
    }
    UpdatejobComponent.prototype.ngOnInit = function () {
        // this.getJobById();
    };
    /*
    public getJobById() {
        alert('aaaa');
        alert(this.job.job_name);
      alert(this.job.job_description);
  
      */
    UpdatejobComponent.prototype.updateJob = function () {
        var _this = this;
        this.api.updateJob(this.jobModel).subscribe(function (res) {
            _this.status = true;
            _this.jobModel.jobName = res.jobName;
            _this.jobModel.jobDescription = res.jobDescription;
            _this.api.setMainMessage('Job Updated');
            _this.api.setSubMessage('Your Job Information has been Successfully Updated.');
            _this.router.navigateByUrl('request-message');
        }, function (err) {
            alert('Can\'t find job');
            _this.api.setMainMessage('Job Updation failed');
            _this.api.setSubMessage('Failed to update job record');
            _this.router.navigateByUrl('request-message');
        });
    };
    UpdatejobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updatejob',
            template: __webpack_require__(/*! ./updatejob.component.html */ "./src/app/updatejob/updatejob.component.html"),
            styles: [__webpack_require__(/*! ./updatejob.component.css */ "./src/app/updatejob/updatejob.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdatejobComponent);
    return UpdatejobComponent;
}());



/***/ }),

/***/ "./src/app/workingjob/workingjob.component.css":
/*!*****************************************************!*\
  !*** ./src/app/workingjob/workingjob.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workingjob/workingjob.component.html":
/*!******************************************************!*\
  !*** ./src/app/workingjob/workingjob.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 style=\"text-align: center;color: red\" *ngIf=\"status\">{{message}}</h4>\n<form  #f=\"ngForm\"  (ngSubmit)=\"adddWorking()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">No. Of Hours Work</label>\n    <input type=\"text\" class=\"form-control\"  name=\"hours\" [(ngModel)]=\"jobrecord.hourSpent\" required=\"required\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Job Hour(number)\">\n  </div>\n    \n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Date</label>\n    <input class=\"form-control\" name=\"date\"  [(ngModel)]=\"jobrecord.date\" required=\"required\" type=\"date\">\n    <label for=\"sel1\">Select list (select one):</label>\n      <select class=\"form-control\" [(ngModel)]=\"jobrecord.jobStatus\" name=\"job_status\" id=\"sel1\">\n        <option value=\"pending\">Pending</option>\n         <option value=\"complete\">Complete</option>\n       \n      </select>\n    \n  </div>\n\n\n  <button  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/workingjob/workingjob.component.ts":
/*!****************************************************!*\
  !*** ./src/app/workingjob/workingjob.component.ts ***!
  \****************************************************/
/*! exports provided: WorkingjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingjobComponent", function() { return WorkingjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/restapi.service */ "./src/app/shared/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkingjobComponent = /** @class */ (function () {
    function WorkingjobComponent(api) {
        this.api = api;
        this.status = false;
        this.message = '';
        this.workingJob = {
            workId: 0,
            employeeWorking: null,
            date: '',
            hourSpent: ''
        };
        this.jobrecord = {
            date: '',
            hourSpent: 0,
            assignId: 0,
            workId: 0,
            jobStatus: 'pending'
        };
        //  this.workingJob.employeeWorking = this.api.getWorkingJob();
        this.jobrecord.assignId = this.api.getAssignId();
    }
    WorkingjobComponent.prototype.adddWorking = function () {
        var _this = this;
        this.api.addWorkingHour2(this.jobrecord).subscribe(function (res) {
            _this.jobrecord = res;
            _this.status = true;
            _this.message = 'Record Added Successfully';
        }, function (err) {
            alert('can add working detail....plz try again');
        });
    };
    WorkingjobComponent.prototype.ngOnInit = function () {
    };
    WorkingjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workingjob',
            template: __webpack_require__(/*! ./workingjob.component.html */ "./src/app/workingjob/workingjob.component.html"),
            styles: [__webpack_require__(/*! ./workingjob.component.css */ "./src/app/workingjob/workingjob.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"]])
    ], WorkingjobComponent);
    return WorkingjobComponent;
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

module.exports = __webpack_require__(/*! E:\Workspace\Spring Workspace\JobManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map