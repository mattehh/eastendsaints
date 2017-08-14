import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { DivisionDetailComponent } from './divisions/division-detail.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { TeamsComponent } from './teams/teams.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { EditScheduleComponent } from './schedules/edit-schedule.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin', component: AdminComponent, children: [
          { path: 'division', component: DivisionsComponent },
          { path: 'division/:id', component: DivisionDetailComponent },
          { path: 'season', component: SeasonsComponent },
          { path: 'team', component: TeamsComponent },
          {
            path: 'schedule', component: SchedulesComponent, children: [
              { path: ':id', component: EditScheduleComponent }
            ]
          }
        ]
      },

    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

