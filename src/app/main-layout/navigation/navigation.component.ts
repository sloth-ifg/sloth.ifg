import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfig } from 'src/util/utils';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private files: FileList;
  public notice: boolean = false;
  public project: boolean = false;
  public user: boolean = false;
  public menu: boolean = false;
  @Output('menu') memuChange: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
  }

  upload(event: any) {
    this.files = event.target.files;

    const formData = new FormData();

    for (let index = 0; index < this.files.length; index++) {
      formData.append("files", <File>this.files.item(index));
    }

    this.httpClient.post(`${UrlConfig("manager")}/upload`, formData).subscribe(
      (success) => {
        const result: any = success;
        console.log(result);
      },
      (error) => {
        console.log(error.status);
        console.log(error.error.message);
      }
    )
  }

  menuSizing() {
    this.menu=!this.menu;

    this.memuChange.emit(this.menu);
  }
}
