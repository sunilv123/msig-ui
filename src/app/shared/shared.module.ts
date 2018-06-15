import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ExponentialStrengthPipe],
  exports: [CommonModule, FormsModule, ExponentialStrengthPipe]
})
export class SharedModule { }
