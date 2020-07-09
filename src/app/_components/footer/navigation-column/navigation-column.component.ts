import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-column',
  templateUrl: './navigation-column.component.html',
  styleUrls: ['./navigation-column.component.scss']
})
export class NavigationColumnComponent implements OnInit {
  @Input() column;
  constructor() { }

  ngOnInit(): void {
  }

}
