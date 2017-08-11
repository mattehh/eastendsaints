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
    id: number;
    division: any;

    constructor(private route: ActivatedRoute, private adminService: AdminService) { 
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnInit() {
        this.getDivision();
    }

    getDivision() {
        return this.adminService.getDivision(this.id).subscribe(division => this.division = division);
    }
}
