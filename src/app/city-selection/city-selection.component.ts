import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { GeolocationService } from '../geolocation.service';
import { LocationObject } from '../location-object';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.css']
})
export class CitySelectionComponent implements OnInit {
  citySelectForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private geolocationService: GeolocationService
  ) {
      this.citySelectForm = formBuilder.group({
        cityName: ''
      });
   }

  ngOnInit() { }

  getLocation(): Promise<LocationObject> {
    return this.geolocationService.getLocation();
  }

  async showForecastForLocation() {
    const location: LocationObject = await this.getLocation();
    this.router.navigate([`/forecast/${location.latitude}/${location.longitude}`]);
  }
}














// const getLocationPromise = new Promise((resolve, reject) => {
//   this.getLocation();
// });

// const url = await getLocationPromise;

// getLocationPromise.then(() => {
//   this.router.navigate([`/forecast/${this.location.latitude}/${this.location.longitude}`]);
// });

// this.getLocation().then((location: LocationObject) => {
//   this.router.navigate([`/forecast/${location.latitude}/${location.longitude}`])
// });
