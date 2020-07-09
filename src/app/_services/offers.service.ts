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
    // Subscribing to offers from the query change
    this.ar.queryParams.subscribe( params => {
      this.getOffersApi(params);
    });
  }
  getOffersObservable() {
    return this.offersSubject.asObservable();
  }
  async getOffersApi(query) {
    // Requesing the offers from the server
    this.offers = await this.http.get( `${this.baseUrl}`, {
      params: {...query}
    });
    this.offersSubject.next(this.offers);
  }
}
