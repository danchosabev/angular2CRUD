import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './app-hero-list.component';

const appRoutes: Routes = [
	{
		path: 'heroes',
		component: HeroListComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);