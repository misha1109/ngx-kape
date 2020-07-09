import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  // A service for fetching locally saved data
  constructor() { }

  async getJson(type) {
    return fetch(`../../assets/json/${type}.json`).then(res => res.json()).then( obj => obj.data );
  }
}
