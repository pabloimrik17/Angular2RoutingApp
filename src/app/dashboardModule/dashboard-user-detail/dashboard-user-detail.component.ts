import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-user-detail',
  templateUrl: './dashboard-user-detail.component.html',
  styleUrls: ['./dashboard-user-detail.component.css']
})
export class DashboardUserDetailComponent implements OnInit {
  user: User;
  editName: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      const username: string = params['username'];

      this.userService.getUser(username).then(user => {
        this.user = user;
        this.editName = user.name;
      });
    });
  }

  // Go to Dashboard users
  cancel() {
    this.router.navigate(['/dashboard/users'])
  }

  save() {
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    if (this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    }

    return true;
  }
}
