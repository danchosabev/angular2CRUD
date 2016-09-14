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

	//constructor(private carService: CarService) { }

	ngOnInit() {
		//this.carService.getCars().then(cars => this.cars = cars);
		//this.carService.getCarsSmall().then(cars => this.cars = cars);
	}
}

