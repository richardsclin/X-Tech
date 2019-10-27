import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employees } from './employees.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private ApiUrl = 'http://172.16.241.121/x-server/api/Employees'; //;'http://localhost:53875/api/Employees'

  constructor(
    private http: HttpClient) { }

  getEmps(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.ApiUrl);
  }

  getEmpById(id: string): Observable<Employees> {
    const url = `${this.ApiUrl}/${id}`;
    return this.http.get<Employees>(url);
  }

  addEmp(data: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.ApiUrl, data, httpOptions).pipe(
      tap((data: Employees) => console.log('addEmp')),
      catchError(this.handleError<Employees>('addEmp')));
  }

  updateEmp(data: Employees): Observable<Employees> {
    const url = `${this.ApiUrl}/${data.employeeId}`;
    return this.http.put(url, data, httpOptions).pipe(
      tap((data: Employees) => console.log('updateEmp')),
      catchError(this.handleError<Employees>('updateEmp')));
  }

  deleteEmp(data: Employees): Observable<Employees> {
    const url = `${this.ApiUrl}/${data.employeeId}`;
    return this.http.delete(url, httpOptions).pipe(
      tap((data: Employees) => console.log('deleteEmp')),
      catchError(this.handleError<Employees>('deleteEmp')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
