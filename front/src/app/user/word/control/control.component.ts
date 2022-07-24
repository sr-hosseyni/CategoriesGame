import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CategoryRead } from "../../../core/backend";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {
  @Input() category!: CategoryRead;
  @Input() formGroup!: FormGroup;

  get isValid() {
    return this.formGroup.controls[this.category.name].valid;
  }
}
