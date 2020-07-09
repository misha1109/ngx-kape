import { Injectable } from '@angular/core';
import {AssetsService} from './assets.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langSubject: BehaviorSubject<any>;
  constructor(
    private assetsService: AssetsService
  ) {
    this.langSubject = new BehaviorSubject(null);
    this.assetsService.getJson('languages').then( lngs => {
      this.langSubject = new BehaviorSubject({
        languages: lngs,
        current: lngs[0]
      });
    }); // TODO: add lang from cookies
  }
  languageObservable() {
    return this.langSubject.asObservable();
  }
  setLang(lang) {
    // changes the language globally.....
  }
}
