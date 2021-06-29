import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedCompartidaModule } from '../shared-compartida/shared-compartida.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedCompartidaModule
  ]
})
export class DashboardModule { }
