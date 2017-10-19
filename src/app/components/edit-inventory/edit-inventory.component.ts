import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inventory } from '../../models/Inventory';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  id:string;
  inventory:Inventory={
    name:'',
    purchaseDate:'',
    department:'',
    price:0,
    quantity:0,
  }

  constructor(
    public inventoryService:InventoryService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.inventoryService.getInventory(this.id).subscribe(inventory => {
     this.inventory = inventory;
    });

  }

  onSubmit({value, valid}: {value:Inventory, valid:boolean} ){
    if(!valid){
      // console.log("not vaild");
      this.flashMessagesService.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['edit-inventory/'+this.id]);
    } else {
      // console.log(valid);
      this.inventoryService.updateInventory(this.id, value);
      this.flashMessagesService.show("Inventory is now updated", {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['/inventory/'+this.id]);
    }
  }


}
