import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { SysMenu } from './auth';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>      
      <nb-sidebar-header>
        <div class="row main-btn sys-header">
        <i class="sysIcon menu-icon nb-home"></i>
        <span><nb-select class="sys-switch" placeholder="Select System" [(selected)]="selectedSysMenu">
          <nb-option [value]="sys" *ngFor="let sys of sysMenus" (selectionChange)="onSysChange($event)">{{sys.sysName}}</nb-option>
        </nb-select></span>
        </div>
      </nb-sidebar-header>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  sysMenus: SysMenu[];
  menu: NbMenuItem[];
  selectedSysMenu: SysMenu;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.getSysMenus()
    .subscribe(respSysMenus => this.sysMenus = respSysMenus);
  }
  selectSys(sys) {//select -> (selectedChange)="selectSys($event)"
    alert('selected');
    this.selectedSysMenu = sys;
    this.menu = this.selectedSysMenu.sysMenu;    
  }
  onSysChange(option) { //option -> (selectionChange)="onSysChange($event)"
    //alert('selected : '+JSON.stringify(option));    
    this.selectedSysMenu = option.value;
    
    this.menu = this.selectedSysMenu.sysMenu;
    this.menu.forEach(
      function (value) {
        value.icon = 'nb-list';
      }
    );
    option.parent.hide();
    return true;
  }
}
