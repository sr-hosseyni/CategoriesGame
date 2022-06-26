import { Component, OnInit } from '@angular/core';
import { PlayerRead, PlayerService } from "../../../core/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  players: PlayerRead[] = [];

  constructor(private playerService: PlayerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayerCollection().subscribe(response => {
      this.players = response;
    });
  }

  deletePlayer(player: PlayerRead): void {
    this.playerService.deletePlayerItem(player.id + '')
      .subscribe(response => {
        this.getPlayers();
      });
  }

  openPlayer(player: PlayerRead): void {
    this.router.navigateByUrl('/players/' + player.id, {state: {currentPlayer: player}});
  }
}
