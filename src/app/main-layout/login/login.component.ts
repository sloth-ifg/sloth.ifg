import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { passwordHash, UrlConfig } from 'src/util/utils';
import { Router } from '@angular/router';
import { AlertService } from 'src/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public valid: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alert: AlertService,
  ) {
    this.valid = new FormGroup({
      id: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  login() {
    let param = {
      id: this.valid.value.id,
      password: passwordHash(this.valid.value.password, this.valid.value.id)
    };

    this.httpClient.post(UrlConfig("login"), param).subscribe(
      (success: any) => {
        sessionStorage.setItem("user", JSON.stringify(success.user));
        sessionStorage.setItem("token", success.token);
        this.router.navigateByUrl("/dashboard");
      },
      error => {
        this.alert.error(error);
      }
    );
  }

  get id() { return this.valid.get('id'); }
  get password() { return this.valid.get('password'); }
}
