import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsParentComponent } from './inputs/inputs-parent/inputs-parent.component';
import { ViewchildParentComponent } from './viewchild/viewchild-parent/viewchild-parent.component';
import { BsParentComponent } from './behavior-subjects/bs-parent/bs-parent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inputs'
  },
  {
    path: 'inputs',
    component: InputsParentComponent
  },
  {
    path: 'view-child',
    component: ViewchildParentComponent
  },
  {
    path: 'behavior-subjects',
    component: BsParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
