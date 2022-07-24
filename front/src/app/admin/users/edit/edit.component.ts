import { Component, OnInit } from '@angular/core';
import { UserRead, UserService, UserWrite } from "../../../core/backend";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  user: UserWrite = {} as UserWrite;
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    let state = this.location.getState() as { data: { currentUser: UserRead } };
    if (state.data && state.data.currentUser && state.data.currentUser.id == this.id) {
      this.user = state.data.currentUser;
      this.buildForm();
    } else {
      this.userService.getUserItem(this.id + '').subscribe((data: UserRead) => {
        this.user = data;
        this.buildForm();
      });
    }
  }

  buildForm() {
    this.form = new FormGroup({
      email: new FormControl(this.user.email, Validators.required),
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.userService.putUserItem(this.id + '', this.form.value).subscribe((res: any) => {
      console.log('User updated successfully!');
      this.router.navigateByUrl('users/index');
    })
  }
}
