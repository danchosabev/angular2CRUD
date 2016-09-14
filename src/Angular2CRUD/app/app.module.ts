import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {InputTextModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';

import { AppComponent }   from './app.component';
import { HomeComponent } from './app-home.component';

// Test
import { TestComponent } from './app-test.component';

// Heroes
import { HeroListComponent } from './app-hero-list.component';
import { HeroDetailsComponent } from './app-hero-details.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

// Cars
import { CarListComponent } from './app-car-list.component';

import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		InputTextModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		TestComponent,
		HomeComponent,
		HeroListComponent,
		HeroDetailsComponent,
		DashboardComponent,
		CarListComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
