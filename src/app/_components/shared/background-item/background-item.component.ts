import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-background-item',
  templateUrl: './background-item.component.html',
  styleUrls: ['./background-item.component.scss']
})
export class BackgroundItemComponent implements OnInit {
  @Input() src;
  @Input() styles;
  constructor() { }

  ngOnInit(): void {
  }

}
