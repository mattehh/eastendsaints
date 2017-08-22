import { Component, OnInit } from '@angular/core';

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
