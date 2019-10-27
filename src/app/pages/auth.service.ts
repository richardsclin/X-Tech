import { Injectable,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NbAuthService } from '@nebular/auth/services/auth.service';
import { SysMenu, UserInfo } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private menuUrl = 'http://172.16.241.121/x-server/api/Auth/SysList?UserId=';  // URL to web api
  private user  : UserInfo;
  constructor(private http: HttpClient,service: NbAuthService, router: Router) {    
  }

  getSysMenus(): Observable<SysMenu[]> { 
    var url = this.menuUrl + this.user.userId;
    return this.http.get<SysMenu[]>(url);
  }
  setUser(user: UserInfo) {
    this.user= user;
  }
  getUser() {
    return this.user;
  } 
}
