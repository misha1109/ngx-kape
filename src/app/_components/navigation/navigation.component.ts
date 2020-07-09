import {Component, OnDestroy, OnInit} from '@angular/core';
import {AssetsService} from '../../_services/assets.service';
import {LanguageService} from '../../_services/language.service';
import {Subscription} from 'rxjs';
import {BreakpointsService} from '../../_services/breakpoints.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  langSubscription: Subscription;
  navItems;
  lang: {
    current: string,
    languages: string[]
  };
  constructor(
    private assetService: AssetsService,
    private langService: LanguageService,
    private breakpointService: BreakpointsService
  ) { }

  async ngOnInit() {
    this.navItems = await this.assetService.getJson('navigation');
    this.langSubscription = this.langService.languageObservable().subscribe( lang => this.lang = lang );
  }
  ngOnDestroy() {
    // Unsubscribing to prevent leaks
    if ( this.langSubscription ) {
      this.langSubscription.unsubscribe();
    }
  }

  setLang(lang) {
    this.lang.current = lang;
    this.langService.setLang(lang);
  }
}
