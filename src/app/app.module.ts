import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  GridComponent, 
  TabGroupComponent,
  ShadedBarComponent,
  InformativeCardComponent,
  FooterComponent,
  NavBarComponent,
  InformativeBannerComponent
} from 'src/components';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TabGroupComponent,
    ShadedBarComponent,
    InformativeCardComponent,
    FooterComponent,
    NavBarComponent,
    InformativeBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
