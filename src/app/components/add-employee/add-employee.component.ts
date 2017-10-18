import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    salary:0
  }


  constructor(
    public flashMessagesService:FlashMessagesService,
    public router: Router,
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }


  onSubmit({value, valid}: {value:Employee, valid:boolean} ){
    if(!valid){
      // console.log("not vaild");
      this.flashMessagesService.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['add-employee']);
    } else {
      // console.log(valid);
      this.employeeService.newEmployee(value);
      this.flashMessagesService.show("New employee added", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['add-employee']);
    }
  }
}
