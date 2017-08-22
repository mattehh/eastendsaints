import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminService } from '../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-seasons',
  templateUrl: 'seasons.component.html',
  styleUrls: ['seasons.component.css'],
})
export class SeasonsComponent implements OnInit {
  form: FormGroup;
  seasons: any[];
  divisions: any[];

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.createForm();
    this.getDivisions();
    this.getSeasons();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      division_id: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  submitForm(): void {
    this.adminService.addSeason(this.form.value).subscribe(results => {
      this.getSeasons();
      this.form.reset();
    })
  }

  getSeasons(): void {
    this.adminService.getSeasons().subscribe(seasons => this.seasons = seasons);
  }

  getDivisions(): void {
    this.adminService.getDivisions().subscribe(divisions => this.divisions = divisions);
  }
}
