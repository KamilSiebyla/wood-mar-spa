import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  GridComponent, 
  TabGroupComponent,
  NavBarComponent
} from 'src/components';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TabGroupComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
