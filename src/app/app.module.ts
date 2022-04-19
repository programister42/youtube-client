import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, YoutubeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
