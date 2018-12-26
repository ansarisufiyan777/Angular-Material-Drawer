import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input, Output } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';
import { EventEmitter } from 'events';
import { Content } from '@angular/compiler/src/render3/r3_ast';
const content = require('../drawer-config.json');
@Component({
  selector: 'angular-material-drawer',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  @Output() onSideNavChange = new EventEmitter();

  @Output() onNgMatInit = new EventEmitter();

  version = VERSION;


  navData: NavItem[] = content;
  constructor(private navService: NavService) {
  }

  onNavDraweropenChange(){
    this.onSideNavChange.emit(this.navService.appDrawer);
    this.navService.emintNavChange();
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;

    //Emit after mat drawer init
    this.onNgMatInit.emit(content);
  }
}
