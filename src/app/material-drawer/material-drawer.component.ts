import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input, Output } from '@angular/core';
import { VERSION } from '@angular/material';
import { EventEmitter } from 'events';
import { NavItem } from '../nav-item';
import { NavService } from '../nav.service';
const content = require('../../drawer-config.json');
@Component({
  selector: 'app-material-drawer',
  templateUrl: './material-drawer.component.html',
  styleUrls: ['./material-drawer.component.scss']
})
export class MaterialDrawerComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  @Output() onSideNavChange = new EventEmitter();

  @Output() onNgMatInit = new EventEmitter();

  version = VERSION;


  navData: any = content;
  constructor(public navService: NavService) {
    
    this.navService.isMiniVarient = this.navData['miniVarient'];
    this.navService.isExpanded = this.navData['opened'];
  }

  onNavDraweropenChange(){
    this.onSideNavChange.emit(this.navService.appDrawer);
    this.navService.emintNavChange();
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
    this.onNgMatInit.emit(content);
  }

}
