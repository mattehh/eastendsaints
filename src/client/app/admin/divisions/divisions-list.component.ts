import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-divisions-list',
    templateUrl: 'divisions-list.component.html',
    styleUrls: ['divisions-list.component.css'],
})
export class DivisionsListComponent implements OnInit {
    divisions: any = [];

    constructor(private adminService: AdminService) { }

    ngOnInit() {
        this.getDivisions();
    }

    getDivisions() {
        return this.adminService.getDivisions().subscribe(divisions => this.divisions = divisions);
    }
}
