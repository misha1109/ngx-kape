import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-features-column',
  templateUrl: './features-column.component.html',
  styleUrls: ['./features-column.component.scss']
})
export class FeaturesColumnComponent implements OnInit {
  @Input() columnData;
  constructor() { }

  ngOnInit(): void {
  }

}
