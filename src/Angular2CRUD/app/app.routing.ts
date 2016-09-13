import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './app-hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailsComponent } from './app-hero-details.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
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
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);