import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() cardData;
  constructor() { }

  ngOnInit(): void {
    this.cardData.billing = `Billed ${Math.round(this.cardData.price * 100) / 100}${this.cardData.currency} every month`;
    this.cardData.guaranteeDays = this.cardData.guaranteeDays + '-day money back guarantee';
  }
}
