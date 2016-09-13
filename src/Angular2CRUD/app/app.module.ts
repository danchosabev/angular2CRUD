import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { TestComponent } from './app-test.component';
import { HeroListComponent } from './app-hero-list.component';
import { HeroDetailsComponent } from './app-hero-details.component';
import { HeroService } from './hero.service';

import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		TestComponent,
		HeroListComponent,
		HeroDetailsComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
