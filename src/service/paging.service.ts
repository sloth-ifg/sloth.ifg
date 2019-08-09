import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagingService {
  public VIEW_COUNT = 15;
  public PAGE_COUNT = 5;
  public start: number;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.init();
  }

  init() {
    this.start = 0;
  }

  isFirst() {
    return this.start == 0;
  }

  isLast(total: number) {
    let paging = this.pagingCalc(total);
    return this.start + 5 >= paging;
  }

  getEnd(total: number) {
    return this.pagingCalc(total) - 1;
  }

  paging(index: number, url: string, params: HttpParams) {
    return this.httpClient.get(`${url}/${index * this.VIEW_COUNT}`, {params: params});
  }

  prevPage(url: string, params: HttpParams) {
    this.start = this.start - 5 > 0 ? this.start - 5 : 0;
    return this.httpClient.get(`${url}/${this.start * this.VIEW_COUNT}`, {params: params});
  }

  nextPage(total: number, url: string, params: HttpParams) {
    let paging = this.pagingCalc(total);
    this.start = this.start + 5 >= paging ? this.start : this.start + 5;
    return this.httpClient.get(`${url}/${this.start * this.VIEW_COUNT}`, {params: params});
  }

  firstPage(url: string, params: HttpParams) {
    this.start = 0;
    return this.httpClient.get(`${url}/${this.start * this.VIEW_COUNT}`, {params: params});
  }

  lastPage(total: number, url: string, params: HttpParams) {
    let paging = this.pagingCalc(total);
    this.start = paging % this.PAGE_COUNT == 0 ? paging - this.PAGE_COUNT : paging - (paging % this.PAGE_COUNT);
    return this.httpClient.get(`${url}/${(paging - 1) * this.VIEW_COUNT}`, {params: params});
  }

  pageCount(total: number, present: number) {
    let paging = this.pagingCalc(total);
    let pageList = new Array<number>();

    if (paging - present > this.PAGE_COUNT) {
      paging = present + this.PAGE_COUNT;
    }

    for (let i = this.start; i < paging; i++) {
      pageList.push(i);
    }

    return pageList;
  }

  private pagingCalc(total: number) {
    return Math.floor(total % this.VIEW_COUNT == 0 ? total / this.VIEW_COUNT : (total / this.VIEW_COUNT) + 1)
  }
}
