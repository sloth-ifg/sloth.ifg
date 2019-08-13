import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AddComponent } from 'src/app/shared/components/modal/manager/add/add.component';
import { DeleteComponent } from 'src/app/shared/components/modal/manager/delete/delete.component';
import { ModifyComponent } from 'src/app/shared/components/modal/manager/modify/modify.component';

@Injectable({
  providedIn: 'root'
})
export class ManagerModalService {
  private ref: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  getRef() {
    return this.ref.content;
  }

  add() {
    this.ref = this.modalService.show(AddComponent, { backdrop: false, ignoreBackdropClick: true });

    return this.modalService.onHidden;
  }

  modify(id: string) {
    const initialState = {
      id: id
    };
    
    this.ref = this.modalService.show(ModifyComponent, { backdrop: false, ignoreBackdropClick: true, initialState });

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
