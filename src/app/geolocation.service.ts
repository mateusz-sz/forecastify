import { Injectable } from '@angular/core';

import { LocationObject } from './location-object';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getLocation(): Promise<LocationObject> {

    return new Promise((resolve, reject) => {
      const location: LocationObject = {
        latitude: null,
        longitude: null
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          location.latitude = position.coords.latitude;
          location.longitude = position.coords.longitude;
          resolve(location);
        },
        () => reject('Could not get your location') );
    });

  }
}
