import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../models/Employee';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:string;
  employee: Employee;
  
  constructor(
    public employeeService:EmployeeService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.employeeService.getEmployee(this.id).subscribe(employee => {
      this.employee = employee;
    // console.log(this.employee);
    })
  }

  onDeleteClick(){
    if(confirm("Fire employe?")){
      this.employeeService.deleteEmployee(this.id);
      this.flashMessagesService.show('Employee is now deleted', {cssClass: 'alert-success', timeout: 50000});
      this.router.navigate(['employeeDashboard']);
    }
  }
  
}
