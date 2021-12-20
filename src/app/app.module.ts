import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SkiResortsComponent } from './ski-resorts/ski-resorts.component';
import { SkiResortPanelComponent } from './ski-resorts/ski-resort-panel/ski-resort-panel.component';
import { TracksComponent } from './ski-resorts/tracks/tracks.component';
import { WeatherComponent } from './ski-resorts/weather/weather.component';
import { SkipassComponent } from './ski-resorts/skipass/skipass.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SkiResortsComponent,
    SkiResortPanelComponent,
    TracksComponent,
    WeatherComponent,
    SkipassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
