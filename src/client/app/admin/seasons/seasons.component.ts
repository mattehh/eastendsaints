import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-seasons',
    templateUrl: 'seasons.component.html',
    styleUrls: ['seasons.component.css'],
})
export class SeasonsComponent {
    divisions = [{ name: 'Senior', id: 1 }, { name: 'Double-X', id: 2 }];
    activeSeasons = [
        { name: '2017 Senior', division: 'Senior', start: '2017-01-01', end: '2017-06-01' },
        { name: '2017 Double-X', division: 'Double-X', start: '2017-01-01', end: '2017-06-01' }
    ];
    seasonHistory = [
        { name: '2016 Senior', division: 'Senior', start: '2017-01-01', end: '2016-06-01' },
        { name: '2016 Double-X', division: 'Double-X', start: '2017-01-01', end: '2016-06-01' },
        { name: '2015 Senior', division: 'Senior', start: '2015-01-01', end: '2015-06-01' },
        { name: '2015 Double-X', division: 'Double-X', start: '2015-01-01', end: '2015-06-01' }
    ];
}
