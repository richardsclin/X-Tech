import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Employees } from '../../employees.model';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent{

  constructor(public dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Employees, private apiService: EmployeesService) {
  }

  confirmDelete(): void {
    this.apiService.deleteEmp(this.data).subscribe(() => this.dialogRef.close(true));
  }
}
