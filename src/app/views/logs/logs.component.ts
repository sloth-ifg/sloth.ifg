import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { LogConfig } from 'src/util/utils';
import { AlertService } from 'src/service/alert.service';
import { Log } from 'src/model/Log';
import { PagingService } from 'src/service/paging.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  public list: Array<Log>;
  public pageList: Array<number>;
  public inputLog: Log;

  private searchLog: Log;
  private present: number;
  private total: number;

  constructor(
    private alert: AlertService,
    public pagingService: PagingService
  ) {
    this.list = new Array();
    this.pageList = new Array();
    this.present = 0;
    this.total = 0;
    this.searchLog = new Log();
    this.inputLog = new Log();
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

    this.pagingService.paging(this.present, LogConfig("logs"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }

  search() {
    this.present = 0;
    this.pagingService.start = 0;
    this.searchLog.copy(this.inputLog);

    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.paging(this.present, LogConfig("logs"), params).subscribe(
      (success) => {
        this.pageInit(success);

        this.pageList = this.pagingService.pageCount(this.total, this.present);
      },
      (error) => {
        this.alert.error(error);
      }
    )
  }

  download() {
    location.href = `${LogConfig("download")}?id=${this.searchLog.id}&skill=${this.searchLog.skill}&user=${this.searchLog.user}&message=${this.searchLog.message}&date=${this.searchLog.date}`;
  }

  paging(index: number) {
    this.present = index;

    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.paging(this.present, LogConfig("logs"), params).subscribe(
      (success) => {
        this.pageInit(success);
      },
      (error) => {
        this.alert.error(error);
      }
    );
  }

  prev() {
    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.prevPage(LogConfig("logs"), params).subscribe(
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
    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.nextPage(this.total, LogConfig("logs"), params).subscribe(
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
    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.firstPage(LogConfig("logs"), params).subscribe(
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
    let params = new HttpParams({ fromObject: this.searchLog.toJSON() });

    this.pagingService.lastPage(this.total, LogConfig("logs"), params).subscribe(
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
