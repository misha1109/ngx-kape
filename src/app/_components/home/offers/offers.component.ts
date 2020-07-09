import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../../_services/offers.service';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerSubscription: Subscription;
  offers;
  // cards = [
  //   {
  //     url: 'something',
  //     expiration: '1 Month',
  //     billing: 'Billed 9.99$ every month',
  //     price: '13.99',
  //     currency: '$'
  //   },
  //   {
  //     promoted: true,
  //     url: 'something',
  //     expiration: '1 Month',
  //     billing: 'Billed 9.99$ every month',
  //     price: '13.99',
  //     currency: '$',
  //     guaranteeDays: '3.5',
  //     freeMonths: 2,
  //     gift: 'TOASTER'
  //   },
  //   {
  //     url: 'something',
  //     expiration: '1 Month',
  //     billing: 'Billed 9.99$ every month',
  //     price: '13.99',
  //     currency: '$'
  //   }
  // ];
  paragraphs = [
    {
      text: 'ULLAMCORPER SIT AMET RISUS NULLAM EGET',
      weight: 'bold',
      size: '36',
      style: 'italic',
      color: 'var(--white)',
      padding: '1em'
    },
    {
      text: 'AND NOBODY HAS A CLUE ABOUT WHAT YOU\'RE DOING ONLINE',
      weight: 'bold',
      size: '20',
      color: 'var(--white)',
      padding: '1em'
    },
  ];
  constructor(
    private offersService: OffersService,
  ) {
  }

  ngOnInit(): void {
    this.offerSubscription = this.offersService.getOffersObservable().subscribe( offers => this.offers = offers);
  }
}
