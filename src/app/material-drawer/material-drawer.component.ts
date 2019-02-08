import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from '../nav-item';
import { NavService } from '../utils/nav.service';
import { ConfigService } from '../utils/config.service';
@Component({
  selector: 'app-material-drawer',
  templateUrl: './material-drawer.component.html',
  styleUrls: ['./material-drawer.component.scss']
})
export class MaterialDrawerComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  //on Side nav change 
  @Output() onSideNavChange = new EventEmitter();

  //Material drawer initialization emit
  @Output() onNgMatInit = new EventEmitter();

  //Material drawer version
  public version = VERSION;

  //Material drawer data
  public navData: any;

  constructor(public navService: NavService,
    public configService: ConfigService) {
    this.configService.onJsonUpdate.subscribe(res => {
      this.navData = res;
      this.navService.isMiniVarient = this.navData['miniVarient'];
      this.navService.isExpanded = this.navData['opened'];
      this.onNgMatInit.emit(this.navData);
    })
  }

  onNavDraweropenChange() {
    this.onSideNavChange.emit(this.navService.appDrawer);
    this.navService.emitNavChange();
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
