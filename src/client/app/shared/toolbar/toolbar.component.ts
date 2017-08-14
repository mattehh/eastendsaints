import { Component, OnInit, NgZone } from '@angular/core';
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
  private isShrunk: boolean = false;
  private slideOut: boolean = false;

  constructor(private route: ActivatedRoute, zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 60) {
          this.isShrunk = true;
        } else {
          this.isShrunk = false;
        }
      });
    }
  }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView(true)
    });
  }
}

