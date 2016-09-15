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
var car_service_1 = require('./car.service');
var CarListComponent = (function () {
    function CarListComponent(carService) {
        this.carService = carService;
    }
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCars().then(function (cars) { return _this.cars = cars; });
        //this.carService.getCarsSmall().then(cars => this.cars = cars);
    };
    CarListComponent.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayViewDialog = true;
    };
    CarListComponent.prototype.addeditCar = function (car) {
        if (car) {
            this.actionName = "Edit";
            this.editedCar = {
                vin: car.vin,
                year: car.year,
                brand: car.brand,
                color: car.color
            };
        }
        else {
            this.actionName = "Add";
            this.editedCar = {
                vin: "",
                year: "",
                brand: "",
                color: ""
            };
        }
        this.displayAddEditDialog = true;
    };
    CarListComponent.prototype.deleteCar = function (car) {
        this.selectedCar = car;
        this.displayDeleteConfirmation = true;
    };
    CarListComponent.prototype.onDialogHide = function () {
        this.selectedCar = null;
        this.editedCar = null;
    };
    CarListComponent = __decorate([
        core_1.Component({
            selector: 'my-app-car-list',
            templateUrl: 'view/app-car-list.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], CarListComponent);
    return CarListComponent;
}());
exports.CarListComponent = CarListComponent;
