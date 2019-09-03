import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CitySelectionComponent } from './city-selection/city-selection.component';
import { ForecastComponent } from './forecast/forecast.component';
import { OpenWeatherService } from './open-weather.service';
import { WeatherForecastWidgetComponent } from './weather-forecast-widget/weather-forecast-widget.component';
import { RoundPipe } from './round.pipe';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      CitySelectionComponent,
      ForecastComponent,
      WeatherForecastWidgetComponent,
      RoundPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
