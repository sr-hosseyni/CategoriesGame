import { Component, OnInit } from '@angular/core';
import { CategoryRead, CategoryService } from "../../../core/api";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  category!: CategoryRead;
  form!: FormGroup;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['categoryId'];
    this.categoryService.getCategoryItem(this.id + '').subscribe((data: CategoryRead) => {
      this.category = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
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
    this.categoryService.putCategoryItem(this.id + '', this.form.value).subscribe((res: any) => {
      console.log('Category updated successfully!');
      this.router.navigateByUrl('categories/index');
    })
  }
}
