import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  public currentUrl: string;
  public menu: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.currentUrl = this.title(event.urlAfterRedirects);
    });
  }

  title(url: string): string {
    switch (url) {
      case "/dashboard":
        return "Dashboard";
      case "/logs":
        return "Logs";
      case "/manager":
        return "Manager";
      case "/help":
        return "Help";
      default:
        return "Error";
    }
  }

  sizing(menu: boolean) {
    this.menu = menu;
  }
}
