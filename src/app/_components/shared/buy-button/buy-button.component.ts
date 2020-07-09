import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {
  @Input() text: string;
  @Input() url: string;
  @Input() specialStyle: any;
  constructor() { }

  ngOnInit(): void {
  }

}
