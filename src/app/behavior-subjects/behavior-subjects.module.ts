import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsParentComponent } from './bs-parent/bs-parent.component';
import { BsChildComponent } from './bs-child/bs-child.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BsParentComponent,
    BsChildComponent
  ],
  exports: [
    BsParentComponent
  ]
})
export class BehaviorSubjectsModule { }
