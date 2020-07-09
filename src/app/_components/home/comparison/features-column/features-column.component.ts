import {Component, Input, OnInit} from '@angular/core';
import {BreakpointsService} from '../../../../_services/breakpoints.service';

@Component({
  selector: 'app-features-column',
  templateUrl: './features-column.component.html',
  styleUrls: ['./features-column.component.scss']
})
export class FeaturesColumnComponent implements OnInit {
  @Input() columnData;
  isSmall: boolean;
  constructor(
    private breakpointService: BreakpointsService
  ) { }

  ngOnInit(): void {
    this.breakpointService.getBreakpointObserver().subscribe( (screen) => {
      this.isSmall = screen.small;
    });
  }
}
