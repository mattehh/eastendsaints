import { Component, OnChanges, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-teams-list',
  templateUrl: 'teams-list.component.html',
  styleUrls: ['teams-list.component.css'],
})
export class TeamsListComponent {
  @Input() teams: any;
}
