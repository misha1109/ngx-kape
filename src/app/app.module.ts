import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {NavigationModule} from './_components/navigation/navigation.module';
import {FooterModule} from './_components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import {LocalityComponent} from './_components/locality/locality.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NavigationModule,
    FooterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
