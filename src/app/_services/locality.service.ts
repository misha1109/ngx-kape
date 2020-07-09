import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpService} from './http.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {
  get baseUrl() { return environment.baseApiLocality; }
  localitySubject: Subject<any>;
  locality;

  constructor(
    private http: HttpService,
  ) {
    this.localitySubject = new Subject();
    this.getlocalityApi();
  }

  getlocalityObservable() {
    return this.localitySubject.asObservable();
  }
  async getlocalityApi() {
    this.locality = await this.http.get( `${this.baseUrl}`);
    this.localitySubject.next(this.locality);
  }
}
