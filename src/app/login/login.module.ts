import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        NbCardModule,
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {}
