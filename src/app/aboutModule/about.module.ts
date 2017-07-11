import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUserComponent} from "./about-user/about-user.component";
import {AboutComponent} from "./about/about.component";
import {aboutRouting} from "./about.routing";
import {AboutSectionComponent} from "./about-section/about-section.component";
import {AboutUsersResolve} from "./about/about-resolve.service";
import {AboutUserResolve} from "./about/about-user-resolve.service";
import {UserService} from "../shared/services/user.service";

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
      AboutUsersResolve,
      AboutUserResolve,
      UserService
  ]
})
export class AboutModule { }
