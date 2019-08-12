import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddComponent } from './components/modal/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyComponent } from './components/modal/modify/modify.component';
import { DeleteComponent } from './components/modal/delete/delete.component';

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
    ModalComponent,
    AddComponent,
    ModifyComponent,
    DeleteComponent,
  ],
  exports: [
    MDBBootstrapModule,
    CascadingCardComponent,
    PanelComponent,
    ModalComponent,
    AddComponent,
  ],
  entryComponents: [ModalComponent, AddComponent, ModifyComponent, DeleteComponent,],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
