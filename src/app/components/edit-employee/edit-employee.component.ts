import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/Employee';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id:string;
  employee:Employee ={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    startDate:'',
    salary:0

  }
  constructor(
    public employeeService:EmployeeService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     this.employeeService.getEmployee(this.id).subscribe(employee => {
      this.employee = employee;
     });

  }
  onSubmit({value, valid}: {value:Employee, valid:boolean} ){
    if(!valid){
      // console.log("not vaild");
      this.flashMessagesService.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['edit-employee/'+this.id]);
    } else {
      // console.log(valid);
      this.employeeService.updateEmployee(this.id, value);
      this.flashMessagesService.show("Employee is now updated", {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['/employee/'+this.id]);
    }
  }


}
