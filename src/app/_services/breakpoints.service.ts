import { Injectable } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
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
      Object.entries(this.breakpoints).forEach( entry => {
        device[entry[0]] = result.breakpoints[entry[1]];
      });
      this.screenSubject.next(device);
    });
  }
  getBreakpointObserver() {
    return this.screenSubject.asObservable();
  }
}
