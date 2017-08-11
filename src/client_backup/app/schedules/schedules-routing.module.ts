import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchedulesComponent } from './schedules.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'schedules', component: SchedulesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
