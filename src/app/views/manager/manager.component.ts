import { Component, OnInit, EventEmitter } from '@angular/core';
import { PagingService } from 'src/service/paging.service';
import { AlertService } from 'src/service/alert.service';
import { ManagerConfig } from 'src/util/utils';
import { HttpParams } from '@angular/common/http';
import { Manager } from 'src/model/Manager';
import { ManagerModalService } from 'src/service/manager-modal.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  public list: Array<any>;
  public pageList: Array<number>;
  public inputManager: Manager;

  private searchManager: Manager;
  private present: number;
  private total: number;

  constructor(
    private alert: AlertService,
    private manager: ManagerModalService,
    public pagingService: PagingService,
  ) {
    this.list = new Array();
    this.pageList = new Array();
    this.present = 0;
    this.total = 0;
    
    this.inputManager = new Manager();
    this.searchManager = new Manager();
  }

  ngOnInit() {
    this.pagingService.init();
    this.load();
  }

  pageInit(success: any) {
    this.list = success.list;

    this.total = success.total;
  }

  load() {
    let params = new HttpParams();

    this.pagingService.paging(this.present, ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    )
  }

  search() {
    this.present = 0;
    this.pagingService.init();
    this.searchManager.copy(this.inputManager);

    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.paging(this.present, ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    )
  }

  alertHidden(modal: EventEmitter<any>) {
    if (modal.observers.length == 0) {
      modal.subscribe(()=> {
        if (this.manager.getRef().status) {
          this.load();
        }
      }); 
    }
  }

  add() {
    this.alertHidden(this.manager.add());
  }

  modify(id: string) {
    this.alertHidden(this.manager.modify(id));
  }

  delete(id: string) {
    this.alertHidden(this.manager.delete(id));
  }

  paging(index: number) {
    this.present = index;

    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.paging(this.present, ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }

  prev() {
    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.prevPage(ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.present = this.pagingService.start;

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }

  next() {
    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.nextPage(this.total, ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.present = this.pagingService.start;

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }

  first() {
    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.firstPage(ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.present = this.pagingService.start;

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    )
  }

  last() {
    let params = new HttpParams({ fromObject: this.searchManager.toJSON() });

    this.pagingService.lastPage(this.total, ManagerConfig("manager"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.present = this.pagingService.start;

        this.pageList = this.pagingService.pageCount(this.total, this.present);

        this.present = this.pagingService.getEnd(this.total);
      },
      (error) => {
        this.alert.error(error);
      }
    )
  }
}
