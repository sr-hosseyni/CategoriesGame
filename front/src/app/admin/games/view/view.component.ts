import { Component, OnInit } from '@angular/core';
import { GameRead, GameService } from "../../../core/backend";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  game: GameRead = {} as GameRead;

  constructor(
    public gameService: GameService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['gameId'];
    let state = this.location.getState() as { data: { currentGame: GameRead } };
    if (state.data && state.data.currentGame && state.data.currentGame.id == this.id) {
      this.game = state.data.currentGame;
    } else {
      this.gameService.getGameItem(this.id + '').subscribe((data: GameRead) => {
        this.game = data;
      });
    }
  }

  deleteGame(game: GameRead): void {
    this.gameService.deleteGameItem(game.id + '')
      .subscribe(() => {
        this.router.navigateByUrl('games/index');
      });
  }
}
