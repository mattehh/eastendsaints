// Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Services
import { AdminService } from './admin.service';

// Components
import { AdminComponent } from './admin.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { DivisionsListComponent } from './divisions/divisions-list.component';
import { DivisionDetailComponent } from './divisions/division-detail.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonsListComponent } from './seasons/seasons-list.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams/teams-list.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { EditScheduleComponent } from './schedules/edit-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DivisionsComponent,
    DivisionsListComponent,
    DivisionDetailComponent,
    SeasonsComponent,
    SeasonsListComponent,
    TeamsComponent,
    TeamsListComponent,
    SchedulesComponent,
    EditScheduleComponent
  ],
  exports: [
    AdminComponent,
    DivisionsComponent,
    DivisionsListComponent,
    DivisionDetailComponent,
    SeasonsComponent,
    SeasonsListComponent,
    TeamsComponent,
    TeamsListComponent,
    SchedulesComponent,
    EditScheduleComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
