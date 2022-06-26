import { Component, OnInit, Output } from '@angular/core';
import { GameRead, GameService, GameWrite } from "../../core/api";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  // @Output('game') games: GameRead[] = [];
  games: GameRead[] = [];
  newGame: GameWrite = {};

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGameCollection(1)
      .subscribe(response => {
        console.log(response);
        this.games = response
      });
  }

  deleteGame(game: GameRead): void {
    this.gameService.deleteGameItem(game.id + '')
      .subscribe(response => {
        this.getGames();
      });
  }

  addGame(): void {
    console.log(this.newGame.description);
    this.gameService.postGameCollection(this.newGame)
      .subscribe(response => {
        console.log(response.id);
        this.getGames();
      });
    this.newGame = {};
  }

}
