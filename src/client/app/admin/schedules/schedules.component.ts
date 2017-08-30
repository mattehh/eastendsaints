import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-schedules',
  templateUrl: 'schedules.component.html',
  styleUrls: ['schedules.component.css'],
})
export class SchedulesComponent implements OnInit {
  seasons: any[];
  teams: any[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
    this.adminService.getSeasons().subscribe(seasons => this.seasons = seasons);
  }

  getTeams() {
    this.adminService.getTeams().subscribe(teams => this.teams = teams);
  }
}
