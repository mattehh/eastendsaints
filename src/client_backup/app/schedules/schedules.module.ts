import { NgModule } from '@angular/core';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [SchedulesRoutingModule, SharedModule],
  declarations: [SchedulesComponent],
  exports: [SchedulesComponent],
  providers: [NameListService]
})
export class SchedulesModule { }
