import { Component, Input, OnInit } from '@angular/core';
import { GameRead, GameService, GameWrite } from "../../core/api";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input('game') game: GameRead = {};

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    // this.getGames();
  }

  getGames(): void {
    // this.gameService.getGameCollection(1)
    //   .subscribe(response => {
    //     console.log(response);
    //     this.games = response
    //   });
  }

  deleteGame(game: GameRead): void {
    this.gameService.deleteGameItem(game.id + '')
      .subscribe(response => {
        this.getGames();
      });
  }

  addGame(): void {
    // this.gameService.postGameCollection(this.newGame)
    //   .subscribe(response => {
    //     console.log(response.id);
    //     this.getGames();
    //   });
  }
}
