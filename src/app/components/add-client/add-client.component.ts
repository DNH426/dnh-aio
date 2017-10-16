import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    balance: 0,
  }

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public clientService: ClientService,
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    if(!valid){
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout:4000});
      this.router.navigate(['add-client']);
    } else {
      this.clientService.newClient(value);
      this.flashMessagesService.show('New client added', {cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/']);
    }

  }

}
