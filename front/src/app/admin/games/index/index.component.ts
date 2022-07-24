import { Component, OnInit } from '@angular/core';
import { GameRead, GameService } from "../../../core/backend";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ViewComponent } from "../view/view.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  games: GameRead[] = [];

  constructor(private gameService: GameService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGameCollection().subscribe(response => {
      this.games = response;
    });
  }

  deleteGame(game: GameRead): void {
    this.gameService.deleteGameItem(game.id + '')
      .subscribe(response => {
        this.getGames();
      });
  }

  openGame(game: GameRead): void {
    const modalRef = this.modalService.open(ViewComponent);
    modalRef.componentInstance.game = game;
    modalRef.componentInstance.id = game.id;
  }
}
