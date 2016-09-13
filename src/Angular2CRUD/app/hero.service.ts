import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	};

	getHero(id: number): Promise<Hero> {

		return this.getHeroes()
			.then(heros => heros.find(hero => hero.id === id));
	}

	// See the "Take it slow" appendix
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => this.getHeroes());
	}

}