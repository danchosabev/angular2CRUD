"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// PrimeNG
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var app_component_1 = require('./app.component');
var app_home_component_1 = require('./app-home.component');
var helper_service_1 = require('./helper.service');
// Test
var app_test_component_1 = require('./app-test.component');
// Heroes
var app_hero_list_component_1 = require('./app-hero-list.component');
var app_hero_details_component_1 = require('./app-hero-details.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_service_1 = require('./hero.service');
// Cars
var app_car_list_component_1 = require('./app-car-list.component');
var car_service_1 = require('./car.service');
//import { routing } from './app.routing';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                primeng_1.InputTextModule,
                primeng_1.DataTableModule,
                primeng_1.DataListModule,
                primeng_1.DataGridModule,
                primeng_2.PanelModule,
                primeng_2.TooltipModule,
                primeng_1.SharedModule,
                primeng_1.PaginatorModule,
                primeng_2.DialogModule,
                primeng_2.ToolbarModule,
                primeng_2.ButtonModule,
                primeng_2.DropdownModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                app_test_component_1.TestComponent,
                app_home_component_1.HomeComponent,
                app_hero_list_component_1.HeroListComponent,
                app_hero_details_component_1.HeroDetailsComponent,
                dashboard_component_1.DashboardComponent,
                app_car_list_component_1.CarListComponent
            ],
            providers: [
                helper_service_1.HelperService,
                hero_service_1.HeroService,
                car_service_1.CarService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
