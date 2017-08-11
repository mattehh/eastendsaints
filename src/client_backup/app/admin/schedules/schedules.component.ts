import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-schedules',
    templateUrl: 'schedules.component.html',
    styleUrls: ['schedules.component.css'],
})
export class SchedulesComponent {
    seasons = [{ name: '2017 Senior', id: 1 }, { name: '2017 Double-X', id: 2 }];
}
