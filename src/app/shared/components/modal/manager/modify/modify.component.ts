import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/service/alert.service';

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

  }

  reset(id: string) {
    this.alert.open("Reset", `정말 ${id}님의 비밀번호를 초기화 하겠습니까?`);
  }

  get name() { return this.valid.get('name'); }
  get select() { return this.valid.get('select'); }
}
