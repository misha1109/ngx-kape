import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  @Input() navItem: {
    title: string;
    url: string;
    children;
  };
  subMenuStyle;
  constructor() { }

  ngOnInit(): void {
    this.setHoverState(false);
  }
  setHoverState( state ) {
    switch (state) {
      case true:
        this.subMenuStyle = {
          transform: 'scale(1)'
        };
        break;
      case false:
        this.subMenuStyle = {
          transform: 'scale(0)'
        };
        break;
    }
  }

}
