/**
 * Created by Etherless on 09/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AboutUserComponent} from './about-user/about-user.component';
import {AboutSectionComponent} from './about-section/about-section.component';
import {AboutUsersResolve} from './about/about-resolve.service';
import {AboutUserResolve} from './about/about-user-resolve.service';

const aboutRoutes = [
    // RESOLVE ES INTERESANTE FRENTE A UN SERVICIO DIRECTO EN EL COMPONENTE PARA RECHAZAR EL ACCESO A UN DATO QUE NO EXISTE Y REDIRIGIR

    {path : 'about',
        component: AboutSectionComponent,
        children: [
            { path: '', component: AboutComponent, resolve: { users: AboutUsersResolve}},
            { path: ':username', component: AboutUserComponent, resolve: {user: AboutUserResolve} },
        ]
    }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
