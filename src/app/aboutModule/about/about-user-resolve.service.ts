import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../shared/services/user.service";

@Injectable()
export class AboutUserResolve implements Resolve<User>{
  resolve(route: ActivatedRouteSnapshot): Observable<User> | Promise<User> | User {
    let username = route.params["username"];

    return this.service.getUser(username).then(user => {
      if(user) {
        return user;
      } else {
        //Rechazamos la peticion y echamos al cliente fuera incluso antes de instanciar nada.
        this.router.navigate(['/about'])
      }
    })
  }


  constructor(private service: UserService, private router: Router) { }

}
