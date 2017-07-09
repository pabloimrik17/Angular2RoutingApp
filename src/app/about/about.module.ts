import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUserComponent} from "../about-user/about-user.component";
import {AboutComponent} from "./about.component";
import {UserService} from "../shared/services/user.service";
import {aboutRouting} from "./about.routing";
import {AboutSectionComponent} from "../about-section/about-section.component";

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
      AboutComponent,
      AboutUserComponent,
      AboutSectionComponent
  ],
  providers: [
      UserService
  ]
})
export class AboutModule { }
