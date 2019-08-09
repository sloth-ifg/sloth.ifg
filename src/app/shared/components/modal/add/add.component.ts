import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ManagerConfig } from 'src/util/utils';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
  }

  signUp() {
    const json = {};
    this.httpClient.post(ManagerConfig("add"), json);
    this.modalRef.content.sign = true;
  }
}
