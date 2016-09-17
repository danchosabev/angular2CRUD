import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Car} from './car';
import {CARS} from './car-mock';

@Injectable()
export class CarService {

	constructor(private http: Http) { }

	lsName: string = 'appA2Cars';
	listCars: Car[];	

	getCars(): Promise<Car[]> {
		if (localStorage.getItem(this.lsName)) {
			this.listCars = JSON.parse(localStorage.getItem(this.lsName)).cars;
		} else {
			this.listCars = [];
		}

		return Promise.resolve(this.listCars);
	};

	getCar(id: string): Promise<Car> {
		return this.getCars()
			.then(cars => cars.find(car => car.id === id));
	}

	addCar(car: Car): void {
		this.listCars.push(car);
		this.saveDataToLocalStorage();
	}	

	editCar(car: Car): void {
		let index = this.getIndexById(car.id);
		if (index != null) {
			this.listCars[index] = {
				id: car.id,
				vin: car.vin,
				year: car.year,
				brand: car.brand,
				color: car.color
			}
		}		
		this.saveDataToLocalStorage();
	}

	deleteCar(id: string): void {
		let index = this.getIndexById(id);
		if (index != null) {
			this.listCars.splice(index, 1);
			this.saveDataToLocalStorage();
		}
	}

	getIndexById(id: string): number {
		for (var i = 0; i < this.listCars.length; i++) {
			if (this.listCars[i].id === id) {
				return i;
			}
		}
	}

	saveDataToLocalStorage(): void {
		let objCars = { cars: this.listCars };
		localStorage.setItem(this.lsName, JSON.stringify(objCars));
	} 
}