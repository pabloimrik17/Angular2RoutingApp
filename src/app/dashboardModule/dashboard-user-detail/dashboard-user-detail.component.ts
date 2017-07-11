import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";
import {ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard-user-detail',
  templateUrl: './dashboard-user-detail.component.html',
  styleUrls: ['./dashboard-user-detail.component.css']
})
export class DashboardUserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      let username: string = params["username"];

      this.userService.getUser(username).then(user => {
        this.user = user;
      })
    });
  }
}
