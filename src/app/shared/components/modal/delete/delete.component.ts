import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerConfig } from 'src/util/utils';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  public status = false;

  constructor(
    public modalRef: BsModalRef,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  delete(id: string) {
    this.httpClient.delete(`${ManagerConfig("manager")}/${id}`).subscribe(
      () => {
        this.status = true;

        this.modalRef.hide();
      },
      error => {
        console.log(error);

        this.modalRef.hide();
      }
    )
  }
}
