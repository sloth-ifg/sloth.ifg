import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddComponent } from './components/modal/manager/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyComponent } from './components/modal/manager/modify/modify.component';
import { DeleteComponent } from './components/modal/manager/delete/delete.component';
import { OpenComponent } from './components/modal/open/open.component';
import { CheckComponent } from './components/modal/check/check.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CascadingCardComponent,
    PanelComponent,
    AddComponent,
    ModifyComponent,
    DeleteComponent,
    OpenComponent,
    CheckComponent,
  ],
  exports: [
    MDBBootstrapModule,
    CascadingCardComponent,
    PanelComponent,
    AddComponent,
  ],
  entryComponents: [OpenComponent, CheckComponent, AddComponent, ModifyComponent, DeleteComponent,],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
