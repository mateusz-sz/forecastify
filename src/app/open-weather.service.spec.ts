/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenWeatherService } from './open-weather.service';

describe('Service: OpenWeather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherService]
    });
  });

  it('should ...', inject([OpenWeatherService], (service: OpenWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
