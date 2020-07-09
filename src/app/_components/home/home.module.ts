import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {BannerComponent} from './banner/banner.component';
import {HomeComponent} from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { DescriptionComponent } from './description/description.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { FeaturesColumnComponent } from './comparison/features-column/features-column.component';
import { OffersComponent } from './offers/offers.component';
import { OfferCardComponent } from './offers/offer-card/offer-card.component';
import {MatCardModule} from '@angular/material/card';
import { OfferCardPriceComponent } from './offers/offer-card/offer-card-price/offer-card-price.component';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    DescriptionComponent,
    ComparisonComponent,
    FeaturesColumnComponent,
    OffersComponent,
    OfferCardComponent,
    OfferCardPriceComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    SharedModule,
    MatCardModule
  ]
})
export class HomeModule { }
