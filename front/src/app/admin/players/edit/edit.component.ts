import { Component, OnInit } from '@angular/core';
import { PlayerRead, PlayerService } from "../../../core/api";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  player!: PlayerRead;
  form!: FormGroup;

  constructor(
    public playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];
    this.playerService.getPlayerItem(this.id + '').subscribe((data: PlayerRead) => {
      this.player = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required)
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
    this.playerService.putPlayerItem(this.id + '', this.form.value).subscribe((res: any) => {
      console.log('Player updated successfully!');
      this.router.navigateByUrl('players/index');
    })
  }
}
