import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BackgroundItemComponent } from './background-item/background-item.component';



@NgModule({
  declarations: [BuyButtonComponent, ParagraphComponent, BackgroundItemComponent],
  exports: [
    BuyButtonComponent,
    ParagraphComponent,
    BackgroundItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ]
})
export class SharedModule { }
