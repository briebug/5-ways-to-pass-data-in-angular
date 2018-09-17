import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsParentComponent } from './inputs-parent/inputs-parent.component';
import { InputsChild1Component } from './inputs-child1/inputs-child1.component';
import { InputsChild2Component } from './inputs-child2/inputs-child2.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputsParentComponent,
    InputsChild1Component,
    InputsChild2Component
  ],
  exports: [
    InputsParentComponent
  ]
})
export class InputsModule { }
