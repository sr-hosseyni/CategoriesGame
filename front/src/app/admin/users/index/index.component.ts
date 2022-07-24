import { Component, OnInit } from '@angular/core';
import { UserRead, UserService } from "../../../core/backend";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ViewComponent } from "../view/view.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users: UserRead[] = [];

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUserCollection().subscribe(response => {
      this.users = response;
    });
  }

  deleteUser(user: UserRead): void {
    this.userService.deleteUserItem(user.id + '')
      .subscribe(response => {
        this.getUsers();
      });
  }

  openUser(user: UserRead): void {
    const modalRef = this.modalService.open(ViewComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.id = user.id;
  }
}
