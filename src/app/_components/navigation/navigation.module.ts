import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {SubMenuComponent} from './sub-menu/sub-menu.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    NavigationComponent,
    SubMenuComponent,
  ],
  exports: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class NavigationModule { }
