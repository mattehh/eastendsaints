import { Component, OnInit, Input } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-divisions-list',
  templateUrl: 'divisions-list.component.html',
  styleUrls: ['divisions-list.component.css'],
})
export class DivisionsListComponent {
  @Input() divisions: any;
}
