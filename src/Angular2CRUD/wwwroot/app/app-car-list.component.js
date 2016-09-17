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
var helper_service_1 = require('./helper.service');
var CarListComponent = (function () {
    function CarListComponent(helperService, carService) {
        this.helperService = helperService;
        this.carService = carService;
        this.submitted = false;
    }
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCars().then(function (cars) { return _this.cars = cars; });
        this.years = this.helperService.getYears(true);
    };
    CarListComponent.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayViewDialog = true;
    };
    CarListComponent.prototype.addeditCar = function (car) {
        if (car) {
            this.actionName = "Edit";
            this.editedCar = {
                id: car.id,
                vin: car.vin,
                year: car.year,
                brand: car.brand,
                color: car.color
            };
        }
        else {
            this.actionName = "Add";
            this.editedCar = {
                id: "",
                vin: "",
                year: "",
                brand: "",
                color: ""
            };
        }
        this.displayAddEditDialog = true;
    };
    CarListComponent.prototype.onSave = function (car, isValid) {
        if (isValid) {
            this.submitted = true;
            if (car.id === '') {
                this.carService.addCar({
                    id: this.helperService.newGuid(),
                    vin: car.vin,
                    year: car.year,
                    brand: car.brand,
                    color: car.color
                });
            }
            else {
                this.carService.editCar(car);
            }
            this.displayAddEditDialog = false;
        }
    };
    CarListComponent.prototype.deleteCar = function (car) {
        this.selectedCar = car;
        this.displayDeleteConfirmation = true;
    };
    CarListComponent.prototype.onDelete = function (car) {
        this.carService.deleteCar(car.id);
        this.displayDeleteConfirmation = false;
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
        __metadata('design:paramtypes', [helper_service_1.HelperService, car_service_1.CarService])
    ], CarListComponent);
    return CarListComponent;
}());
exports.CarListComponent = CarListComponent;
