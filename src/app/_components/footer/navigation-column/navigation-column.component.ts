import {Component, Input, OnInit} from '@angular/core';
import {BreakpointsService} from '../../../_services/breakpoints.service';

@Component({
  selector: 'app-navigation-column',
  templateUrl: './navigation-column.component.html',
  styleUrls: ['./navigation-column.component.scss']
})
export class NavigationColumnComponent implements OnInit {
  @Input() column;
  isMobile: boolean;
  constructor(
    private breakpointService: BreakpointsService
  ) { }

  ngOnInit(): void {
    this.breakpointService.getBreakpointObserver().subscribe( (screen) => {
      this.isMobile = screen.mobile;
    });
  }

}
