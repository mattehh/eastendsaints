import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'schedules',
  templateUrl: 'schedules.component.html',
  styleUrls: ['schedules.component.css'],
})
export class SchedulesComponent implements OnInit {
  division: string;

  constructor() {}

  ngOnInit() {
    this.division = 'Senior';
  }

  setDivision(division:string) {
    this.division = division;
  }

}