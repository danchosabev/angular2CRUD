"use strict";
var router_1 = require('@angular/router');
var app_home_component_1 = require('./app-home.component');
var app_hero_list_component_1 = require('./app-hero-list.component');
var dashboard_component_1 = require('./dashboard.component');
var app_hero_details_component_1 = require('./app-hero-details.component');
var app_car_list_component_1 = require('./app-car-list.component');
var appRoutes = [
    {
        path: '',
        //redirectTo: '/dashboard',
        pathMatch: 'full',
        component: app_home_component_1.HomeComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: app_hero_details_component_1.HeroDetailsComponent
    },
    {
        path: 'heroes',
        component: app_hero_list_component_1.HeroListComponent
    },
    {
        path: 'cars',
        component: app_car_list_component_1.CarListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
