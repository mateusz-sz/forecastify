import { Component, OnInit, Input } from '@angular/core';

import { RoundPipe } from '../round.pipe';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-weather-forecast-widget',
  templateUrl: './weather-forecast-widget.component.html',
  styleUrls: ['./weather-forecast-widget.component.sass']
})
export class WeatherForecastWidgetComponent implements OnInit {
  @Input() forecastData;
  iconsMap = {
    Thunderstorm: '11',
    Drizzle: '09',
    Rain: '10',
    Snow: '13',
    Mist: '50',
    Clear: '01',
    Clouds: '03'
  };
  isDayTime: boolean;
  dayOfWeek: string;
  forecastFor4Days$: Observable<any[]>;

  constructor() { }

  ngOnInit() {
    this.setDayTime();
    this.dayOfWeek = this.getDayOfWeek(this.forecastData.list[0].dt_txt);

    this.forecastFor4Days$ = this.getForecastFor4Days();
  }

  getDayOfWeek(date: string): string {
    const weekDays = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    };

    const currentDate = new Date(date);
    const weekDayNumber = currentDate.getDay();
    return weekDays[weekDayNumber];
  }

  setDayTime(): void {
    const hours = new Date().getHours();
    this.isDayTime = hours > 6 && hours < 20;
  }

  getForecastFor4Days(): Observable<any[]> {
    const todayDate = new Date(this.forecastData.list[0].dt_txt);
    let wantedDay = todayDate.getDate() + 1;
    const results = new Array();

    this.forecastData.list.forEach(element => {
      const elementDate = new Date(element.dt_txt);
      const elementDay = elementDate.getDate();
      const elementHour = elementDate.getHours();
      if ( wantedDay === elementDay && elementHour === 12) {
        results.push(element);
        wantedDay++;
      }
    });

    results.forEach(element => {
      element.dayOfWeek = this.getDayOfWeek(element.dt_txt);
    });
    return of(results);
  }

}
