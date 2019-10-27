import { Component, OnInit, ViewChild } from '@angular/core';
import { Employees } from './employees.model';
import { EmployeesService } from './employees.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AddComponent } from './dialogs/add/add.component';
import { EditComponent } from './dialogs/edit/edit.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  dataSource = new MatTableDataSource<Employees>();
  displayedColumns: string[] = ['employeeId', 'fullName', 'empcode', 'mobile', 'position', 'actions'];
  QEmployeeID: string;
  obj: Employees;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: EmployeesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.reloadData();
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, { width: '250px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reloadData();
      }
    });
  }
  reloadData(): void {
    this.apiService.getEmps().subscribe(data => { this.dataSource.data = data; this.dataSource.sort = this.sort; });
  }

  QueryData(): void {
    console.log(this.QEmployeeID);
    if (this.QEmployeeID == null || this.QEmployeeID == '') {
      this.reloadData();
    }
    else {
      this.apiService.getEmpById(this.QEmployeeID).subscribe(data => {
        this.dataSource.data.length = 0;
        const item = this.dataSource.data;
        item.push(data);
        this.dataSource.data = item;
        this.dataSource.sort = this.sort;
      });
    }
    
  }

  openEditDialog(param: Employees): void {
    this.obj = Object.assign({}, param);
    const dialogRef = this.dialog.open(EditComponent, { data: this.obj, width: '250px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reloadData();
      }
    });
  }

  openDeleteDialog(param: Employees): void {
    const dialogRef = this.dialog.open(DeleteComponent, { data: param });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
