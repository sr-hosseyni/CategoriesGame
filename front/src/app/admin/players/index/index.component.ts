import { Component, OnInit } from '@angular/core';
import { PlayerRead, PlayerService } from "../../../core/backend";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  players: PlayerRead[] = [];

  constructor(private playerService: PlayerService, private modalService: NgbModal) {
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
}
