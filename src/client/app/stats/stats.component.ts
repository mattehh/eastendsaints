import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css'],
})
export class StatsComponent implements OnInit {
  division: string;

  constructor() {}

  ngOnInit() {
    this.division = 'Senior';
  }

  setDivision(division:string) {
    this.division = division;
  }

}
