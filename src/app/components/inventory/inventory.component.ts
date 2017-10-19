import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from  '../../models/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[];

  constructor(
    public inventoryService:InventoryService
  ) { }

  ngOnInit() {
    this.inventoryService.getInventories().subscribe(inventories => {
      this.inventories = inventories;
      console.log(this.inventories);
    })

  }



}
