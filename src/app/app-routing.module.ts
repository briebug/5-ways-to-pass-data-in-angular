import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsParentComponent } from './inputs/inputs-parent/inputs-parent.component';
import { ViewchildParentComponent } from './viewchild/viewchild-parent/viewchild-parent.component';
import { BsParentComponent } from './behavior-subjects/bs-parent/bs-parent.component';
import { RouterParentComponent } from './router/router-parent/router-parent.component';
import { RouterChildComponent } from './router/router-child/router-child.component';
import { CryptoResolver } from './router/crypto.resolver';
import { NgrxParentComponent } from './ngrx/ngrx-parent/ngrx-parent.component';

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
  },
  {
    path: 'router',
    component: RouterParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'BTC',
        pathMatch: 'full'
      },
      {
        path: ':symbol',
        component: RouterChildComponent,
        resolve: { coinData: CryptoResolver }
      }
    ]
  },
  {
    path: 'ngrx',
    component: NgrxParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
