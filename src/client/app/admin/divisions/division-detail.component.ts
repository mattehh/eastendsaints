import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-division-detail',
  templateUrl: 'division-detail.component.html',
  styleUrls: ['division-detail.component.css'],
})
export class DivisionDetailComponent implements OnInit {
  division: any;

  constructor(private route: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.getDivision(p.has('id') && +p.get('id')));
  }

  getDivision(id: number) {
    return this.adminService.getDivision(id).subscribe(division => this.division = division);
  }
}
