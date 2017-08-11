import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private route: ActivatedRoute) { }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView(true)
    });
  }
}

