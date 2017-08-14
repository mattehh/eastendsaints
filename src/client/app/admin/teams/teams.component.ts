import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-teams',
    templateUrl: 'teams.component.html',
    styleUrls: ['teams.component.css'],
})
export class TeamsComponent {
    seasons = [{ name: '2017 Senior', id: 1 }, { name: '2017 Double-X', id: 2 }];
    color: any;
}
