import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalityService} from '../../_services/locality.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.scss']
})
export class LocalityComponent implements OnInit, OnDestroy {
  localitySubscription: Subscription;
  local;
  status: string;
  constructor(
    private localityService: LocalityService,
  ) { }

  ngOnInit(): void {
    // Subscribing to locality from response
    this.localitySubscription = this.localityService.getlocalityObservable().subscribe(local => {
      this.local = local;
      this.status = local.secure ? 'hidden' : 'exposed'
      console.log(`%c${JSON.stringify(local)}`, 'color:green');
    });
  }
   ngOnDestroy(): void {
     // Unsubscribing to prevent leaks
     if ( this.localitySubscription ) {
       this.localitySubscription.unsubscribe();
     }
   }

}
