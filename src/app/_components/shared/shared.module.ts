import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ParagraphComponent } from './paragraph/paragraph.component';



@NgModule({
  declarations: [BuyButtonComponent, ParagraphComponent],
  exports: [
    BuyButtonComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ]
})
export class SharedModule { }
