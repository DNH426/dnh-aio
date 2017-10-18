import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

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

}
