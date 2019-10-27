import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Employees } from '../../employees.model';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: Employees, private apiService: EmployeesService) { }

  confirmEdit(): void {
    this.apiService.updateEmp(this.data).subscribe(() => this.dialogRef.close(true));
  }
}
