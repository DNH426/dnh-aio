import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable()
export class InventoryService {
  inventories: FirebaseListObservable<any[]>;
  inventory:FirebaseObjectObservable<any>;


  constructor(
    public af:AngularFireDatabase
  ) { 
    this.inventories = this.af.list('/inventories') as FirebaseListObservable<Inventory[]>;
  }

  getInventories(){
    return this.inventories;
  }

  newInventory(employee:Inventory){ 
    this.inventories.push(employee);
  }

  getInventory(id:string){
    this.inventory = this.af.object('/inventories/'+id) as FirebaseObjectObservable<Inventory>;
    return this.inventory;

  }

  updateInventory(id:string, inventory:Inventory){
    return this.inventories.update(id, inventory);
  }
  /*
  deleteEmployee(id:string){
    return this.inventories.remove(id);

  }
*/
}
