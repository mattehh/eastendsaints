import { NgModule } from '@angular/core';
import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [StatsRoutingModule, SharedModule],
  declarations: [StatsComponent],
  exports: [StatsComponent]
})
export class StatsModule { }
