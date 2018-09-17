import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewchildParentComponent,
    ViewchildChildComponent
  ],
  exports: [
    ViewchildParentComponent
  ]
})
export class ViewchildModule { }
