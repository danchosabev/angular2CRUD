import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Car} from './car';
import {CARS} from './car-mock';

@Injectable()
export class CarService {

	constructor(private http: Http) { }

	getCars(): Promise<Car[]> {
		return Promise.resolve(CARS);
	};

	//getCarsSmall() {
	//	return this.http.get('/showcase/resources/data/cars-small.json')
	//		.toPromise()
	//		.then(res => <Car[]>res.json().data)
	//		.then(data => { return data; });
	//}
}