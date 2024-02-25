import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // Ensure DashboardComponent is declared and exported if needed

@NgModule({
  declarations: [
    DashboardComponent
    // any other components belonging to this module
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule 
  ]
})
export class ReceptionistModule { }
