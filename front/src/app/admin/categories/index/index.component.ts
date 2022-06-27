import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryRead } from "../../../core/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categories: CategoryRead[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys(): void {
    this.categoryService.getCategoryCollection().subscribe(response => {
      this.categories = response;
    });
  }

  deleteCategory(category: CategoryRead): void {
    this.categoryService.deleteCategoryItem(category.id + '', 'events')
      .subscribe(response => {
        this.categories = this.categories.filter(item => item.id !== category.id);
        console.log('Category ' + category.id + ' deleted successfully!');
      });
  }

  openCategory(category: CategoryRead): void {
    this.router.navigateByUrl('/categories/' + category.id, {state: {currentCategory: category}});
  }
}
