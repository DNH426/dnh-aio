import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  employees: FirebaseListObservable<any[]>;
  employee: FirebaseObjectObservable<any>;


  constructor(
    public af: AngularFireDatabase
  ) { 
    this.employees = this.af.list('/employees') as FirebaseListObservable<Employee[]>;
  }
  getEmployees(){
    return this.employees;
  }

  newEmployee(employee:Employee){ 
    this.employees.push(employee);
  }

  getEmployee(id:string){
    this.employee = this.af.object('/employees/'+id) as FirebaseObjectObservable<Employee>;
    return this.employee;

  }
  updateEmployee(id:string, client:Employee){
    return this.employees.update(id, client);
  }

  deleteEmployee(id:string){
    return this.employees.remove(id);

  }
}
