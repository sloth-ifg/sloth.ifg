import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'src/model/Charts';
import { UrlConfig, percent } from 'src/util/utils';
import { User } from 'src/model/User';
import { Router } from '@angular/router';
import { Log } from 'src/model/Log';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public week: Chart;
  public doughnutChart: Chart;
  public total: number;
  public user: User;
  public path = UrlConfig("img");
  public loading: boolean;
  public logs: Array<Log>;
  public managers: Array<any>;

  constructor(
    private httpClient: HttpClient,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.logs = new Array();
    this.managers = new Array();

    this.httpClient.get(UrlConfig("dashboard")).subscribe(
      (success) => {
        const result: any = success;

        this.week = new Chart("line", [
          {data: result.week, label: '사용량'},
        ], ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']);
        
        this.total = result.user.total;
        this.user = result.user;
        this.logs = result.logs;
        this.managers = result.managers;

        this.doughnutChart = new Chart("doughnut", [{data: [percent(this.total, this.user.skill1), percent(this.total, this.user.skill2), percent(this.total, this.user.skill3)]}], ['skill1', 'skill2', 'skill3']);
        this.doughnutChart.chartColors = [
          {
            backgroundColor:["#4285f4","#ff5252","#ffbb33"]
          }
        ]

        this.loading = false;
      },
      () => {
        this.route.navigateByUrl("/error");

        this.loading = false;
      }
    );
  }  
}
