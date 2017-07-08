import { Injectable } from '@angular/core';
import { User } from "../models/user";

const usersPromise: Promise<User[]> = Promise.resolve([
  { id: 1, name: "Pablo", username: "pabloim",  avatar: 'https://pbs.twimg.com/profile_images/3088172495/c1afe3a1f1c6ba15aaed04873b536397_400x400.jpeg' },
  { id: 2, name: "Lucia", username: "luor",     avatar: 'https://pbs.twimg.com/profile_images/875829059439153152/JvHgB_Un_400x400.jpg' },
  { id: 3, name: "Jose",  username: "xelu",     avatar: 'https://pbs.twimg.com/profile_images/1783118571/adelgado2011_400x400.jpg' },
]);

@Injectable()
export class UserService {

  getUsers() {
    return usersPromise;
  }

  getUser(username: string) {

    return usersPromise.then(users => users.find(user => user.username === username));

  }

}
