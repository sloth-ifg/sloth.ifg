import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ManagerConfig, passwordHash } from 'src/util/utils';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public status = false;
  public valid: FormGroup;

  constructor(
    public modalRef: BsModalRef,
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit() {
    this.valid = new FormGroup({
      id: new FormControl("", [Validators.required, Validators.minLength(5)]),
      name: new FormControl("", Validators.required),
      select: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.pattern(/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{3,50}$/)]),
      confirm: new FormControl("", Validators.required),
    }, { validators: this.comparePassword() });
  }

  comparePassword(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls['password'];
      const confirm = group.controls['confirm'];

      if (password.value === "") {
        password.setErrors({ 'Not_null': true });
      } else if (password.value === confirm.value) {
        confirm.setErrors(null);
      } else {
        confirm.setErrors({ 'Not_match': true });
      }

      return {};
    };
  }

  add() {
    let param = {
      id: this.valid.value.id,
      name: this.valid.value.name,
      role: this.valid.value.select,
      password: passwordHash(this.valid.value.password, this.valid.value.id)
    };

    this.httpClient.post(ManagerConfig("add"), param).subscribe(
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

  get id() { return this.valid.get('id'); }
  get name() { return this.valid.get('name'); }
  get select() { return this.valid.get('select'); }
  get password() { return this.valid.get('password'); }
  get confirm() { return this.valid.get('confirm'); }
}
