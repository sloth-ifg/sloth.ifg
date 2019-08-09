import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { LogsComponent } from './logs/logs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    LogsComponent,
    DashboardComponent,
    HelpComponent,
    ManagerComponent,
  ],
  exports: [
    FooterComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
