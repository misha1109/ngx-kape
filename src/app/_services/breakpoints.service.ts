import { Injectable } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  breakpoints = {
    mobile: '(min-width: 768px)',
    desktop: '(min-width: 1200px)'
  };
  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe(Object.values(this.breakpoints)).subscribe(result => {
      const device = {};
      Object.entries(this.breakpoints).forEach( entry => {
        device[entry[0]] = result.breakpoints[entry[1]];
      });
      return result;
    });
  }
}
