import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer.component';
import {SharedModule} from '../shared/shared.module';
import { NavigationColumnComponent } from './navigation-column/navigation-column.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavigationColumnComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class FooterModule { }
