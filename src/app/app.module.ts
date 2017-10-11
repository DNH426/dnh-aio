import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// AngularFire Imports
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
// Service Imports
import { ClientService } from './services/client.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { FinancesComponent } from './components/finances/finances.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { EditComponent } from './components/edit-/edit-.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { EditFinancesComponent } from './components/edit-finances/edit-finances.component';


const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},

];

export const firebaseConfig = {
  apiKey: "AIzaSyArwaaJAwGwrxr7mqjeLdQZsD-SESVLTjM",
  authDomain: "aio-admin.firebaseapp.com",
  databaseURL: "https://aio-admin.firebaseio.com",
  storageBucket: "aio-admin.appspot.com",
  messagingSenderId: "875211112049"
}


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
    EmployeeComponent,
    FinancesComponent,
    InventoryComponent,
    EditComponent,
    EditEmployeeComponent,
    EditInventoryComponent,
    EditFinancesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
