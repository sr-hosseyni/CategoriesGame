import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GameService } from "../../../core/backend";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public gameService: GameService,
    private router: Router
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required]),
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
    this.gameService.postGameCollection(this.form.value).subscribe((res: any) => {
      console.log('Game created successfully!');
      this.router.navigateByUrl('/admin/games');
    })
  }
}
