import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

@Component({
  moduleId: module.id,
  templateUrl: 'schedules.component.html',
  styleUrls: ['schedules.component.css'],
})
export class SchedulesComponent implements OnInit {
  division: string;

  ngOnInit() {
    this.division = 'Senior';
  }

  setDivision(division:string) {
    this.division = division;
  }

}
