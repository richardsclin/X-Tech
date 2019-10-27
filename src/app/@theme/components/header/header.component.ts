import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthService } from '../../../pages/auth.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService,NbAuthJWTToken } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' , action: 'logout()'}];
  alive: boolean =  true;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authService: AuthService,
              private analyticsService: AnalyticsService,
              private nauService: NbAuthService,
              private router: Router) {
  }

  ngOnInit() {
    var _this = this;
    this.user = this.authService.getUser();
    this.menuService.onItemClick()
      .pipe(takeWhile(function () { return _this.alive; }))
      .subscribe(( event ) => {
      this.onItemSelection(event.item.title);
    });
    this.nauService.onTokenChange()
      .pipe(takeWhile(function () { return _this.alive; }))
      .subscribe((token: NbAuthJWTToken) => {
      //alert('token changed:'+token.getValue());   
      if (!token.isValid() ) {          
        //alert('token invalid');   
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
  ngOnDestroy() {
    this.alive = false;
  }
  onItemSelection( title ) {
    var _this = this;
    if ( title === 'Log out' ) {
      //alert('logout.');
      this.nauService.logout('email')
        .pipe(takeWhile(function () { return _this.alive; }))
        .subscribe(function(result) {
        console.info('logout.');
      });

    } else if ( title === 'Profile' ) {
      // Do something on Profile
      alert("User:\n"+JSON.stringify(this.user ));
    }
  }
  
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
