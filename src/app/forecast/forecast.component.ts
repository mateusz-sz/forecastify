import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OpenWeatherService } from '../open-weather.service';
import { LocationObject } from '../location-object';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  cityName: string;
  coordinates: LocationObject;
  forecast;

  constructor(
    private route: ActivatedRoute,
    private weatherService: OpenWeatherService
  ) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.coordinates = {
      latitude: +this.route.snapshot.paramMap.get('latitude'),
      longitude: +this.route.snapshot.paramMap.get('longitude')
    };

    if ( this.cityName ) {
      this.getForecast(this.cityName);
    } else {
      this.getForecast(this.coordinates);
    }
  }

  getForecast(location: string | LocationObject): void {
    this.weatherService.getForecast(location)
      .subscribe(forecast => {
        this.forecast = forecast;
      });

  }

}
