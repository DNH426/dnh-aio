import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

// AF Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardEmployeeComponent } from './components/dashboard-employee/dashboard-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeSidebarComponent } from './components/employee-sidebar/employee-sidebar.component';
import { DashboardInventoryComponent } from './components/dashboard-inventory/dashboard-inventory.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryDetailsComponent } from './components/inventory-details/inventory-details.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { InventorySidebarComponent } from './components/inventory-sidebar/inventory-sidebar.component';

// Service
import { InventoryService } from './services/inventory.service';
import { EmployeeService } from './services/employee.service';
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';


const appRoutes: Routes = [
  // Login Routes
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  // Order Routes
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'add-client', component:AddClientComponent, canActivate:[AuthGuard]},

  // Employee Routes
  {path: 'employeeDashboard', component: DashboardEmployeeComponent,},
  {path: 'add-employee', component: AddEmployeeComponent },
  {path: 'employee/:id', component: EmployeeDetailsComponent },
  {path: 'edit-employee/:id', component:EditEmployeeComponent },

  // Inventory Routes
  {path: 'inventoryDashboard', component: DashboardInventoryComponent },
  {path: 'add-inventory', component: AddInventoryComponent },
  {path: 'inventory/:id', component: InventoryDetailsComponent },
  {path: 'edit-inventory/:id', component: EditInventoryComponent },



];

export const firebaseConfig = {
  apiKey: "AIzaSyArwaaJAwGwrxr7mqjeLdQZsD-SESVLTjM",
  authDomain: "aio-admin.firebaseapp.com",
  databaseURL: "https://aio-admin.firebaseio.com",
  // projectId: "aio-admin",
  storageBucket: "aio-admin.appspot.com",
  messagingSenderId: "875211112049"
};



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    DashboardEmployeeComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeSidebarComponent,
    DashboardInventoryComponent,
    InventoryComponent,
    InventoryDetailsComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    InventorySidebarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    EmployeeService,
    InventoryService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
