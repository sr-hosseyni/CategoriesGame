import { Component, OnInit } from '@angular/core';
import { CategoryRead, CategoryService } from "../../../core/api";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  category!: CategoryRead;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['categoryId'];
    let state = this.location.getState() as { data: { currentCategory: CategoryRead } };
    if (state.data && state.data.currentCategory && state.data.currentCategory.id == this.id) {
      this.category = state.data.currentCategory;
    } else {
      this.categoryService.getCategoryItem(this.id + '').subscribe((data: CategoryRead) => {
        this.category = data;
      });
    }
  }

  deleteCategory(category: CategoryRead): void {
    this.categoryService.deleteCategoryItem(category.id + '')
      .subscribe(response => {
        this.router.navigateByUrl('categories/index');
      });
  }
}
