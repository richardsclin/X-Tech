/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatDialogModule, MatInputModule, MatSortModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatGridListModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AddHeaderInterceptor } from './auth/header_intercetor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatIconModule, MatDialogModule, MatInputModule, MatSortModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatGridListModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSelectModule, MatOptionModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
}
