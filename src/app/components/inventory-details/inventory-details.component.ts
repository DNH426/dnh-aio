import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {
  id:string;
  inventory: Inventory;

  constructor(
    public inventoryService:InventoryService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.inventoryService.getInventory(this.id).subscribe(inventory => {
      this.inventory = inventory;
    // console.log(this.employee);
    })
  }

}
