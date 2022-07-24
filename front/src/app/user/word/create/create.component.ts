import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryRead, CategoryService, WordService } from "../../../core/backend";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  categories: CategoryRead[] = [];

  constructor(
    private wordService: WordService,
    private catService: CategoryService,
    private router: Router
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.buildForm();
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
    this.wordService.postWordCollection(this.form.value).subscribe((res: any) => {
      console.log('Word created successfully!');
      this.router.navigateByUrl('words/index');
    })
  }

  buildForm(): void {
    this.catService.getCategoryCollection()
      .subscribe(categories => {
        this.categories = categories;
        categories.forEach((category: CategoryRead) => {
          this.form.addControl(category.name, new FormControl(''));
        })
      })
  }
}
