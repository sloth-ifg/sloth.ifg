import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public currentUrl: string;
  public menu: boolean = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
     this.currentUrl = this.title(this.router.url);
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
