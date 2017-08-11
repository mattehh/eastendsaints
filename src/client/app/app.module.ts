import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { SchedulesModule } from './schedules/schedules.module';
import { StatsModule } from './stats/stats.module';
import { RulesModule } from './rules/rules.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule, SchedulesModule, StatsModule, RulesModule, AdminModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
