import { Component, OnInit, Input } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() config: object;
  constructor(public navService: NavService) { }
  public isDrawerOpened;
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.navService.onNavChange.subscribe((data)=>{
      this.isDrawerOpened = data.isOpened;
    })
  }

}