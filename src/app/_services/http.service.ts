import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // Http request service
  options = {
    // base options
    headers: [],
  };
  constructor(
    private http: HttpClient
  ) { }

  async get( url, options = null ) {
    // Http get
    try {
      options = {
        ...this.options,
        ...options
      };
      const response = await this.http.get(url, options).toPromise();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
