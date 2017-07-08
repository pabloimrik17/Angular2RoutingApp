import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from "../shared/models/user";

const users: User[] = [
  { id: 1, name: "Pablo", username: "pabloim",  avatar: 'https://pbs.twimg.com/profile_images/3088172495/c1afe3a1f1c6ba15aaed04873b536397_400x400.jpeg' },
  { id: 2, name: "Lucia", username: "luor",     avatar: 'https://pbs.twimg.com/profile_images/875829059439153152/JvHgB_Un_400x400.jpg' },
  { id: 3, name: "Jose",  username: "xelu",     avatar: 'https://pbs.twimg.com/profile_images/1783118571/adelgado2011_400x400.jpg' },
];

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})

export class AboutUserComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let username = this.route.snapshot.params["username"];

    this.user = users.find(function(user) {
      return user.username === username;
    })
  }

}
