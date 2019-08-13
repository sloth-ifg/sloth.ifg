import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { OpenComponent } from 'src/app/shared/components/modal/open/open.component';
import { CheckComponent } from 'src/app/shared/components/modal/check/check.component';

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

  open(title: string, message: string) {
    const initialState = {
      title: title,
      message: message
    };

    this.modalService.show(OpenComponent, { backdrop: false, ignoreBackdropClick: true, initialState });
  }

  error(error: any) {
    const initialState = {
      title: error.statusText,
      message: error.message
    };

    this.modalService.show(OpenComponent, { backdrop: false, ignoreBackdropClick: true, initialState });
  }

  check(title: string, message: string) {
    const initialState = {
      title: title,
      message: message
    };

    this.ref = this.modalService.show(CheckComponent, { backdrop: false, ignoreBackdropClick: true, initialState });

    return this.modalService.onHidden;
  }
}
