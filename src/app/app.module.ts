/* ANGULAR CORE */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* ANGULAR ROUTES */
import { appRouting } from './app.routing';

/* ANGULAR COMPONENTS */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

/* ANGULAR MODULES */
import {AboutModule} from "./aboutModule/about.module";
import {DashboardModule} from "./dashboardModule/dashboard.module";

/* ANGULAR SERVICES */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AboutModule,
    DashboardModule,
    appRouting
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
