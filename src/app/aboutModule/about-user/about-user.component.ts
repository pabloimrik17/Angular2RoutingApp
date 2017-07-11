import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from "../../shared/models/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})

export class AboutUserComponent implements OnInit {
  user: User;
  constructor(
      private route: ActivatedRoute,
      private userSerive: UserService,
      private router: Router
  ) { }

  ngOnInit() {

    /* USANDO UN SERVICIO */
    /*
    let username = this.route.snapshot.params["username"];

    this.userSerive.getUser(username).then(user => {
      this.user = user
    });*/

    this.route.data.forEach((data: {user: User}) => {
      this.user = data.user;
    } )
  }

  goBack() {

    // EQUIVALENTE A RETROCESO EN EL NAVEGADOR
    // window.history.back();

    this.router.navigate(["/about"]);
  }

}
