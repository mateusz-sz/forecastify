import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastWidgetComponent } from './weather-forecast-widget.component';

describe('WeatherForecastWidgetComponent', () => {
  let component: WeatherForecastWidgetComponent;
  let fixture: ComponentFixture<WeatherForecastWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
