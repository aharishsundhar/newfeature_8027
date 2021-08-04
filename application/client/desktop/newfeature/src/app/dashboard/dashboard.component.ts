import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

    public url: any = '';
    public firstName = '';
    public lastName = '';
    public Id;
    public changeName;
    public open;
    public close;

    constructor (
        private dashboardService: DashboardService,
    ) { }

    ngOnInit() {
    }
}