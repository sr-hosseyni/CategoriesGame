import { Component, OnInit } from '@angular/core';
import { UserRead, UserService } from "../../../core/backend";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  user: UserRead = {} as UserRead;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    let state = this.location.getState() as { data: { currentUser: UserRead } };
    if (state.data && state.data.currentUser && state.data.currentUser.id == this.id) {
      this.user = state.data.currentUser;
    } else {
      this.userService.getUserItem(this.id + '').subscribe((data: UserRead) => {
        this.user = data;
      });
    }
  }

  deleteUser(user: UserRead): void {
    this.userService.deleteUserItem(user.id + '')
      .subscribe(response => {
        this.router.navigateByUrl('users/index');
      });
  }
}
