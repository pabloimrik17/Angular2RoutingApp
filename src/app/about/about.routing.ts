/**
 * Created by Etherless on 09/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {AboutUserComponent} from "../about-user/about-user.component";

const aboutRoutes = [
    { path : 'about', component : AboutComponent },
    { path : 'about/:username', component : AboutUserComponent },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);