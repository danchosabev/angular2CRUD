import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app-home.component';
import { HeroListComponent } from './app-hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailsComponent } from './app-hero-details.component';
import { CarListComponent } from './app-car-list.component';

const appRoutes: Routes = [
	{
		path: '',
		//redirectTo: '/dashboard',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailsComponent
	},
	{
		path: 'heroes',
		component: HeroListComponent
	},
	{
		path: 'cars',
		component: CarListComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);