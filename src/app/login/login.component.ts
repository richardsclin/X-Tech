import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../pages/auth.service'
import { UserInfo } from '../pages/auth'
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { AuthService } from '../pages/auth.service';
import { environment } from '../../environments/environment';
import { takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {   
    env = environment;
    email :string;
    user :UserInfo;
    strategy: string = 'email';
    alive: boolean = true;

    constructor(private router: Router,private service: NbAuthService, private authService: AuthService) {}
    
    ngOnInit() {
        var _this = this;
        this.user = new UserInfo();
        this.user.email = 'test@fubon.com';
      
        this.service.onTokenChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe((token: NbAuthJWTToken) => {            
            if (token.isValid()) {               
                this.user = token.getPayload(); 
                this.env.userToken = token.getValue();
                //alert('logined: '+JSON.stringify(this.user));
                this.authService.setUser(this.user);
                this.router.navigateByUrl('/pages/dashboard');
            } else {
                this.env.userToken = '';
            }  
      });
    }

    ngOnDestroy() {
       this.alive = false;
    }
    
    onLogin() {
        //alert('email:'+this.user.email);
        var _this = this;
        this.service.authenticate(this.strategy, this.user)
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (result) {
            //alert(JSON.stringify(result));
            console.info('User signed in.');
        });
    }
}
