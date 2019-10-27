import { Component } from '@angular/core';
import { Employees } from '../../employees.model';
import { EmployeesService } from '../../employees.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public data: Employees;

  constructor(public dialogRef: MatDialogRef<AddComponent>, private apiService: EmployeesService) {
    this.data = new Employees();
  }

  addEmp(): void {
    this.apiService.addEmp(this.data).subscribe(() => this.dialogRef.close(true));
  }
}
