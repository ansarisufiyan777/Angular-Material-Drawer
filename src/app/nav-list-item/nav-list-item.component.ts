import { Component, HostBinding, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../nav-item';
import { Router } from '@angular/router';
import { NavService } from '../utils/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatEventEmitterService } from '../utils/mat-event-emitter.service';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavListItemComponent implements OnInit {

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;  
  constructor(public navService: NavService,
    public matEventEmitterService:MatEventEmitterService,
    public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      if (item.onClickClose) {
        this.navService.closeNav();
      }
      this.matEventEmitterService.sideNavItemClick(item);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.matEventEmitterService.sideNavItemExpanded(item);
      } else {
        this.matEventEmitterService.sideNavItemCollapsed(item);
      }
    }
  }
}
