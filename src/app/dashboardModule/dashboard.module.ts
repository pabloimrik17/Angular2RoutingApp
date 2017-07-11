import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import {DashboardUserHomeComponent} from "./dashboard-user-home/dashboard-user-home.component";
import {DashboardUserDetailComponent} from "./dashboard-user-detail/dashboard-user-detail.component";
import {DashboardUsersComponent} from "./dashboard-users/dashboard-users.component";

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    DashboardUserHomeComponent,
    DashboardUserDetailComponent,
    DashboardUsersComponent
  ]
})
export class DashboardModule { }
