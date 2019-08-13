import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/service/alert.service';
import { ManagerConfig } from 'src/util/utils';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  public status = false;
  public valid: FormGroup;

  constructor(
    public modalRef: BsModalRef,
    private alert: AlertService,
    private httpClient: HttpClient,
  ) {
    this.valid = new FormGroup({
      name: new FormControl("", Validators.required),
      select: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  modify(id: string) {
    let param = {
      id: id,
      name: this.valid.value.name,
      role: this.valid.value.select,
    };

    this.httpClient.post(ManagerConfig("modify"), param).subscribe(
      () => {
        this.status = true;

        this.modalRef.hide();
      },
      error => {
        console.log(error);
        this.modalRef.hide();
      }
    );
  }

  reset(id: string) {
    const modal = this.alert.check("Reset", `정말 <span class="text-danger">${id}</span>님의 비밀번호를 초기화 하겠습니까?`);

    if (modal.observers.length < 2) {
      modal.subscribe(() => {
        if (this.alert.getRef().status) {
          this.alert.getRef().status = false;
          this.alert.open("Success", "비밀번호가 초기화 되었습니다.");
        }
      });
    }
  }

  get name() { return this.valid.get('name'); }
  get select() { return this.valid.get('select'); }
}
