import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsParentComponent } from './inputs/inputs-parent/inputs-parent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inputs'
  },
  {
    path: 'inputs',
    component: InputsParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
