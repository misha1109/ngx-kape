import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  // Service for identifying if platform is browser to prevent errors on ssr and etc
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }
  getIsBrowser() {
    return this.isBrowser;
  }
}
