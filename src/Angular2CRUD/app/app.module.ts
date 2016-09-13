import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { TestComponent } from './app-test.component';
import { HeroListComponent } from './app-hero-list.component';
import { HeroDetailsComponent } from './app-hero-details.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		TestComponent,
		HeroListComponent,
		HeroDetailsComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
