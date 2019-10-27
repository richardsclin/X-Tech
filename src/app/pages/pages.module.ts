import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatButtonModule, MatIconModule, MatDialogModule, MatInputModule, MatSortModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatGridListModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddComponent } from './employee/dialogs/add/add.component';
import { EditComponent } from './employee/dialogs/edit/edit.component';
import { DeleteComponent } from './employee/dialogs/delete/delete.component';
import { EmployeeComponent } from './employee/employee.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MatButtonModule, MatIconModule, MatDialogModule, MatInputModule, MatSortModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatGridListModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSelectModule, MatOptionModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    AddComponent,
    EditComponent,
    DeleteComponent,
    EmployeeComponent,
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent,
  ]
})
export class PagesModule {
}
