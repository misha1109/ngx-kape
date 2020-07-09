import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-offer-card-price',
  templateUrl: './offer-card-price.component.html',
  styleUrls: ['./offer-card-price.component.scss']
})
export class OfferCardPriceComponent implements OnInit {
  @Input() price;
  @Input() currency: string;
  constructor() { }

  ngOnInit(): void {
    this.price = this.price.toString().split('.');
  }
}
