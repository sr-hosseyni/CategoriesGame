import { Component, Inject, OnInit } from '@angular/core';
import {
  CategoryRead,
  CategoryService,
  WordRead,
  WordWrite,
  WordService,
  RoundRead,
} from "../../../core/backend";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  words: WordRead[] = [];
  categories: CategoryRead[] = [];
  round: RoundRead = {id: 1, game: '/api/game/' + 1};

  constructor(
    @Inject(CategoryService) private categoryService: CategoryService,
    @Inject(WordService) private wordService: WordService,
  ) {
  }

  ngOnInit(): void {
    this.getWords();
    this.categoryService.getCategoryCollection()
      .subscribe((categories: CategoryRead[]) => {
        this.categories = categories;
      })
  }

  getWords(): void {
    this.wordService.getWordCollection().subscribe((response: WordRead[]) => {
      this.words = response;
    });
  }

  deleteWord(word: WordRead): void {
    this.wordService.deleteWordItem(word.id + '')
      .subscribe(() => this.getWords());
  }

  sendWord(cat: CategoryRead) {
    let word: WordWrite = {
      category: '/api/categories/' + cat.id,
      round: '/api/rounds/' + this.round.id,
    };
    this.wordService.postWordCollection(word)
  }
}
