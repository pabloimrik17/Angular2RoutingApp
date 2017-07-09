import { Component, OnInit } from '@angular/core';
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {

    /* SERVICE USERS REQUEST */
    /*this.userService.getUsers().then(users => {
      this.users = users;
    });*/

    // OBTENEMOS EL DATO QUE SE NOS ENVIA DESDE LA RUTA ANTERIOR
    this.route.data.forEach((data: {users: User[]}) => {
      this.users = data.users;
    })
  }

}
