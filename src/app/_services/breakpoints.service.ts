import { Injectable } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  // A service for listening to the window resize event
  breakpoints = {
    mobile: '(max-width: 768px)',
    small: '(max-width: 1000px)'
  };
  screenSubject: BehaviorSubject<any>;
  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.screenSubject = new BehaviorSubject(null);
    breakpointObserver.observe(Object.values(this.breakpoints)).subscribe(result => {
      const device = {};
      // Converting to dictionary
      Object.entries(this.breakpoints).forEach( entry => {
        device[entry[0]] = result.breakpoints[entry[1]];
      });
      // Emit to subscribers
      this.screenSubject.next(device);
    });
  }
  getBreakpointObserver() {
    return this.screenSubject.asObservable();
  }
}
