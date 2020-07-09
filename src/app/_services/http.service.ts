import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  options = {
    headers: [],
  };
  constructor(
    private http: HttpClient
  ) { }

  get( url, options = null ) {
    options = {
      ...this.options,
      ...options
    };
    return this.http.get(url, options).toPromise();
  }
}
