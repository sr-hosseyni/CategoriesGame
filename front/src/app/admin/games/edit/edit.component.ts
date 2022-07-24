import { Component, OnInit } from '@angular/core';
import { GameRead, GameService } from "../../../core/backend";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  game: GameRead = {} as GameRead;
  form!: FormGroup;

  constructor(
    public gameService: GameService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['gameId'];

    let state = this.location.getState() as { data: { currentGame: GameRead } };
    if (state.data && state.data.currentGame && state.data.currentGame.id == this.id) {
      this.game = state.data.currentGame;
      this.buildForm();
    } else {
      this.gameService.getGameItem(this.id + '').subscribe((data: GameRead) => {
        this.game = data;
        this.buildForm();
      });
    }
  }

  buildForm() {
    this.form = new FormGroup({
      description: new FormControl(this.game.description, [Validators.required]),
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.gameService.putGameItem(this.id + '', this.form.value).subscribe((res: any) => {
      console.log('Game updated successfully!');
      this.router.navigateByUrl('/admin/games');
    })
  }
}
