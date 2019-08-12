import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AddComponent } from 'src/app/shared/components/modal/add/add.component';
import { DeleteComponent } from 'src/app/shared/components/modal/delete/delete.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private ref: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  getRef() {
    return this.ref.content;
  }

  open() {
    this.modalService.show(ModalComponent);
  }

  error(error: any) {
    console.log(error);

    const initialState = {
      title: error.statusText,
      message: error.message
    };

    this.modalService.show(ModalComponent, { backdrop: false, ignoreBackdropClick: true, initialState });
  }

  add() {
    this.ref = this.modalService.show(AddComponent, { backdrop: false, ignoreBackdropClick: true });

    return this.modalService.onHidden;
  }

  delete(id: string) {
    const initialState = {
      id: id
    };

    this.ref = this.modalService.show(DeleteComponent, { backdrop: false, ignoreBackdropClick: true, initialState });

    return this.modalService.onHidden;
  }
}
