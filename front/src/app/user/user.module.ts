import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WordCreateComponent, WordIndexComponent } from "./word";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlComponent } from './word/control/control.component';

@NgModule({
  declarations: [
    UserComponent,
    WordIndexComponent,
    WordCreateComponent,
    ControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
