import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';
import { HelperService } from './helper.service';
import { SelectItem } from 'primeng/primeng';

@Component({
	selector: 'my-app-car-list',
	templateUrl: 'view/app-car-list.component.html'	
})

export class CarListComponent implements OnInit {
	cars: Car[];
	dateValue: string;
	actionName: string;
	years: SelectItem[];

	selectedCar: Car;
	editedCar: Car;
	submitted = false;

	displayViewDialog: boolean;
	displayAddEditDialog: boolean;
	displayDeleteConfirmation: boolean;

	constructor(private helperService: HelperService, private carService: CarService) { }

	ngOnInit() {
		this.carService.getCars().then(cars => this.cars = cars);
		this.years = this.helperService.getYears(true);
	}

	selectCar(car: Car) {
		this.selectedCar = car;
		this.displayViewDialog = true;
	}

	addeditCar(car: Car) {

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
	}

	onSave(car: Car, isValid: boolean) {
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
			} else {				
				this.carService.editCar(car);
			}

			this.displayAddEditDialog = false;
		}		
	}

	deleteCar(car: Car) {		
		this.selectedCar = car;
		this.displayDeleteConfirmation = true;
	}

	onDelete(car: Car) {		
		this.carService.deleteCar(car.id);
		this.displayDeleteConfirmation = false;
	}

	onDialogHide() {
		this.selectedCar = null;
		this.editedCar = null;
	}
}

