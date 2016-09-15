import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// PrimeNG
import {InputTextModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

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
import { CarService } from './car.service';

import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		InputTextModule,
		DataTableModule,
		DataListModule,
		DataGridModule,
		PanelModule,
		TooltipModule,
		SharedModule,
		PaginatorModule,
		DialogModule,
		ToolbarModule,
		ButtonModule,
		FormsModule,
		HttpModule,		
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
		HeroService,
		CarService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
