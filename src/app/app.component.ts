import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input, Output, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';
import { EventEmitter } from 'events';
@Component({
  selector: 'angular-material-drawer',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
}
