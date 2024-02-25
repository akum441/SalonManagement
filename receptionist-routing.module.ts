import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Adjust this path to where your DashboardComponent is located

// Define the routes for this module
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild because it's a feature module
  exports: [RouterModule] // Export RouterModule so it's available throughout the module
})
export class ReceptionistRoutingModule { }
