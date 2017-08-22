import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-divisions',
  templateUrl: 'divisions.component.html',
  styleUrls: ['divisions.component.css'],
})
export class DivisionsComponent implements OnInit {
  form: FormGroup;
  divisions: any[] = [];

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.createForm();
    this.getDivisions();
  }

  createForm() {
    this.form = this.fb.group({
      'name': ['', Validators.required]
    });
  }

  submitForm() {
    this.adminService.addDivision(this.form.value).subscribe(result => {
      this.getDivisions();
      this.form.reset();
    }, (error) => {
      console.log(error);
    });
  }

  getDivisions() {
    this.adminService.getDivisions().subscribe(divisions => {
      this.divisions = divisions;
    });
  }
}
