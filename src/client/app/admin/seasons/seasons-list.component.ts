import { Component, OnChanges, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-seasons-list',
  templateUrl: 'seasons-list.component.html',
  styleUrls: ['seasons-list.component.css'],
})
export class SeasonsListComponent implements OnChanges {
  @Input() seasons: any;

  ngOnChanges() {
    this.seasons && this.seasons.map(season => {
      season.active = 'Yes';
    });
  }
}
