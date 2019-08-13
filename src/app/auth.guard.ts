import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlConfig } from 'src/util/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }
  
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = sessionStorage.getItem("token");

      let user = sessionStorage.getItem("user");

      if (user != null) 
        user = JSON.parse(user);
      else
        return false;

      if (token != null) {
        this.httpClient.post(UrlConfig("check"), {token: token}).subscribe(
          (success: boolean) => {
            return success;
          },
          () => {
            return false;
          }
        );
        return true;
      } else {
        this.router.navigateByUrl("login");
        return false;
      }
  }
}
