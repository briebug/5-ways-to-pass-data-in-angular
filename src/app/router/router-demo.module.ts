import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterParentComponent } from './router-parent/router-parent.component';
import { RouterChildComponent } from './router-child/router-child.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoResolver } from './crypto.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    RouterParentComponent,
    RouterChildComponent
  ],
  exports: [
    RouterParentComponent
  ],
  providers: [
    CryptoResolver
  ]
})
export class RouterDemoModule { }
