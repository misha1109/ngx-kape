import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpService} from './http.service';
import {environment} from '../../environments/environment';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  offersSubject: Subject<any>;
  offers;
  get baseUrl() { return environment.baseApiOffers; }
  constructor(
    private http: HttpService,
    private ar: ActivatedRoute
  ) {
    this.offersSubject = new Subject();
    this.ar.queryParams.subscribe( params => {
      this.getOffersApi(params);
    });
  }
  getOffersObservable() {
    return this.offersSubject.asObservable();
  }
  async getOffersApi(query) {
    this.offers = await this.http.get( `${this.baseUrl}`, {
      params: {...query}
    });
    console.log(this.offers)
    this.offersSubject.next(this.offers);
  }
}
