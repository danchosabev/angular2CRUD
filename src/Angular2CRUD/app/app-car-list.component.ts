import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

import { Router } from '@angular/router';

@Component({
	selector: 'my-app-car-list',
	templateUrl: 'view/app-car-list.component.html'	
})

export class CarListComponent implements OnInit {
	cars: Car[];
	dateValue: string;
	actionName: string;

	selectedCar: Car;
	editedCar: Car;

	displayViewDialog: boolean;
	displayAddEditDialog: boolean;
	displayDeleteConfirmation: boolean;

	constructor(private carService: CarService) { }

	ngOnInit() {
		this.carService.getCars().then(cars => this.cars = cars);
		//this.carService.getCarsSmall().then(cars => this.cars = cars);
	}

	selectCar(car: Car) {
		this.selectedCar = car;
		this.displayViewDialog = true;
	}

	addeditCar(car: Car) {
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
	}

	deleteCar(car: Car) {
		this.selectedCar = car;
		this.displayDeleteConfirmation = true;
	}

	onDialogHide() {
		this.selectedCar = null;
		this.editedCar = null;
	}
}

