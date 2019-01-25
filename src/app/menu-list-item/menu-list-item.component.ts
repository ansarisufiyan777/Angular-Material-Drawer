import {Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {NavItem} from '../nav-item';
import {Router} from '@angular/router';
import {NavService} from '../utils/nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  exportAs: 'menuInMenuListItemComponent'
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @ViewChild('childMenu') public childMenu;
  @Input() menus: any;
  @Input() depth: number;
  @Input() matMenu: MatMenu;
  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.menus.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.menus.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      if(item.onClickClose){
        this.navService.closeNav();
      }
      
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
