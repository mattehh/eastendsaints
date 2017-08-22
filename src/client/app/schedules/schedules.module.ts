import { NgModule } from '@angular/core';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SchedulesRoutingModule, SharedModule],
  declarations: [SchedulesComponent],
  exports: [SchedulesComponent],
  providers: []
})
export class SchedulesModule { }
