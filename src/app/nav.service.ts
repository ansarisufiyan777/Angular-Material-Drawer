import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);
  public isDrawerOpened = false;
  public onNavChange: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router) {

    //Routing Event
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
    
  }

  public emintNavChange(){
    this.onNavChange.emit(this.appDrawer); 
  }
  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  public toggleNav() {
    this.appDrawer.toggle();
  }
}
