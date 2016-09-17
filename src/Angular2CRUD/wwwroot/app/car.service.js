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
var http_1 = require('@angular/http');
var CarService = (function () {
    function CarService(http) {
        this.http = http;
        this.lsName = 'appA2Cars';
    }
    CarService.prototype.getCars = function () {
        if (localStorage.getItem(this.lsName)) {
            this.listCars = JSON.parse(localStorage.getItem(this.lsName)).cars;
        }
        else {
            this.listCars = [];
        }
        return Promise.resolve(this.listCars);
    };
    ;
    CarService.prototype.getCar = function (id) {
        return this.getCars()
            .then(function (cars) { return cars.find(function (car) { return car.id === id; }); });
    };
    CarService.prototype.addCar = function (car) {
        this.listCars.push(car);
        this.saveDataToLocalStorage();
    };
    CarService.prototype.editCar = function (car) {
        var index = this.getIndexById(car.id);
        if (index != null) {
            this.listCars[index] = {
                id: car.id,
                vin: car.vin,
                year: car.year,
                brand: car.brand,
                color: car.color
            };
        }
        this.saveDataToLocalStorage();
    };
    CarService.prototype.deleteCar = function (id) {
        var index = this.getIndexById(id);
        if (index != null) {
            this.listCars.splice(index, 1);
            this.saveDataToLocalStorage();
        }
    };
    CarService.prototype.getIndexById = function (id) {
        for (var i = 0; i < this.listCars.length; i++) {
            if (this.listCars[i].id === id) {
                return i;
            }
        }
    };
    CarService.prototype.saveDataToLocalStorage = function () {
        var objCars = { cars: this.listCars };
        localStorage.setItem(this.lsName, JSON.stringify(objCars));
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
