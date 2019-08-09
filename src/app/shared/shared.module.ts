import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddComponent } from './components/modal/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    CascadingCardComponent,
    PanelComponent,
    ModalComponent,
    AddComponent,
  ],
  exports: [
    MDBBootstrapModule,
    CascadingCardComponent,
    PanelComponent,
    ModalComponent,
    AddComponent,
  ],
  entryComponents: [ModalComponent, AddComponent],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
