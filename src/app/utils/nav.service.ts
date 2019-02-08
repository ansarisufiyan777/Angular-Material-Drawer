import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavService {
  public appDrawer: any;
  public isMiniVarient: any;
  public isExpanded: boolean;
  public currentUrl = new BehaviorSubject<string>(undefined);
  public isDrawerOpened = false;
  public onNavChange: any = new EventEmitter();
  constructor(private router: Router) {

    //Routing Event
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });

  }

  public emintNavChange() {
    this.onNavChange.emit(this.appDrawer.opened);
  }
  public closeNav() {
    if (!this.isMiniVarient)
      this.appDrawer.close();
    else {
      this.isExpanded = false;
      this.onNavChange.emit(this.getData(this.isExpanded));
    }
  }

  public openNav() {
    if (!this.isMiniVarient)
      this.appDrawer.open();
    else {
      this.isExpanded = true;
      this.onNavChange.emit(this.getData(this.isExpanded));
    }
  }

  public toggleNav() {
    if (!this.isMiniVarient)
      this.appDrawer.toggle();
    else {
      this.isExpanded = !this.isExpanded;
      this.onNavChange.emit(this.getData(this.isExpanded));
    }
  }

  getData(b): object {
    return {
      drawer: this.appDrawer,
      isOpened: b
    }
  }
}
