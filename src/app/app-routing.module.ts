import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitySelectionComponent } from './city-selection/city-selection.component';
import { ForecastComponent } from './forecast/forecast.component';


const routes: Routes = [
  { path: '', component: CitySelectionComponent },
  { path: 'forecast/:cityName', component: ForecastComponent },
  { path: 'forecast/:latitude/:longitude', component: ForecastComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
