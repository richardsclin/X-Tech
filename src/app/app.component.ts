/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, HostListener } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private service: NbAuthService) {
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    //畫面離開時，無條件刪除Nebular建立的token
    localStorage.removeItem("auth_app_token");
  }
}
