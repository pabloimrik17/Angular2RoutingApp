/**
 * Created by Etherless on 07/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes : Routes = [
    { path : '', component : HomeComponent },

    // REDIRECCIONA COMPROBANDO TODA LA URL A CONTACTO
    //{ path : '', redirectTo: '/about', pathMatch: 'full' },

    { path : 'contact', component : ContactComponent },

    { path : '**', component : NotFoundComponent }
];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes, {enableTracing: false});