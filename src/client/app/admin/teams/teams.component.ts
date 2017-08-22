import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminService } from '../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: any[];
  seasons: any[];

  form: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.createForm();
    this.getTeams();
    this.getSeasons();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      season_id: ['', Validators.required],
      color: ['#ffffff', Validators.required]
    });
  }

  submitForm(): void {
    this.adminService.addTeam(this.form.value).subscribe(() => {
      this.getTeams();
      this.form.reset();
    })
  }

  getTeams(): void {
    this.adminService.getTeams().subscribe(teams => this.teams = teams);
  }

  getSeasons(): void {
    this.adminService.getSeasons().subscribe(seasons => this.seasons = seasons);
  }
}
