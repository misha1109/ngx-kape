import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BreakpointsService} from '../../../../_services/breakpoints.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-features-column',
  templateUrl: './features-column.component.html',
  styleUrls: ['./features-column.component.scss']
})
export class FeaturesColumnComponent implements OnInit, OnDestroy {
  @Input() columnData;
  breakSub: Subscription;
  isSmall: boolean;
  constructor(
    private breakpointService: BreakpointsService
  ) { }

  ngOnInit(): void {
    // Subscribing to window resize
    this.breakSub = this.breakpointService.getBreakpointObserver().subscribe( (screen) => {
      this.isSmall = screen.small;
    });
  }
  ngOnDestroy(): void {
    // Unsubscribing to prevent leaks
    if ( this.breakSub ) {
      this.breakSub.unsubscribe();
    }
  }
}
