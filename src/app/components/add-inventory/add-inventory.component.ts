import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service'

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  inventory:Inventory = {
    name:'',
    purchaseDate:'',
    department:'',
    price:0,
    quantity:0,
  }
  constructor(
    public flashMessagesService:FlashMessagesService,
    public router: Router,
    public inventoryService: InventoryService
  ) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value:Inventory, valid:boolean} ){
    if(!valid){
      // console.log("not vaild");
      this.flashMessagesService.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['add-inventory']);
    } else {
      // console.log(valid);
      this.inventoryService.newInventory(value);
      this.flashMessagesService.show("New employee added", {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['add-inventory']);
    }
  }
}
