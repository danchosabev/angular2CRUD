import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-app-hero-details',
	templateUrl: 'view/app-hero-details.component.html'	
})

export class HeroDetailsComponent {
	@Input() hero: Hero;
}

