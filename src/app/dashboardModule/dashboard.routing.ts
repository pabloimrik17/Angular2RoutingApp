/**
 * Created by Etherless on 09/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardUsersComponent} from './dashboard-users/dashboard-users.component';
import {DashboardUserHomeComponent} from './dashboard-user-home/dashboard-user-home.component';
import {DashboardUserDetailComponent} from './dashboard-user-detail/dashboard-user-detail.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {CanDeactivateGuard} from '../shared/guards/can-deactivate.guard';


export const dashboardRoutes: Routes = [
    {
        path: 'dashboard', children: [
            { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
            { path: 'users', component: DashboardUsersComponent, canActivateChild: [AuthGuard], children: [
                { path: '', component: DashboardUserHomeComponent },
                { path: ':username', component: DashboardUserDetailComponent, canDeactivate: [CanDeactivateGuard] }
            ]},
        ]
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
