import { Component, OnInit } from '@angular/core';
import { PlayerRead, PlayerService } from "../../../core/api";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  player!: PlayerRead;

  constructor(
    public playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];
    let state = this.location.getState() as { data: { currentPlayer: PlayerRead } };
    if (state.data && state.data.currentPlayer && state.data.currentPlayer.id == this.id) {
      this.player = state.data.currentPlayer;
    } else {
      this.playerService.getPlayerItem(this.id + '').subscribe((data: PlayerRead) => {
        this.player = data;
      });
    }
  }

  deletePlayer(player: PlayerRead): void {
    this.playerService.deletePlayerItem(player.id + '')
      .subscribe(response => {
        this.router.navigateByUrl('players/index');
      });
  }
}
