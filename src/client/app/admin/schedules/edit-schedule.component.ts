import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-edit-schedule',
    templateUrl: 'edit-schedule.component.html',
    styleUrls: ['edit-schedule.component.css'],
})
export class EditScheduleComponent implements OnDestroy, OnInit {
    sub: any;
    id: any;
    teams = [
        { name: 'The Pylons', id: 1 },
        { name: 'The Black Bear', id: 2 },
        { name: 'Roofchek', id: 3 },
        { name: 'Tyler Marden Contracting', id: 4 }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
