import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputsModule } from './inputs/inputs.module';
import { ViewchildModule } from './viewchild/viewchild.module';
import { BehaviorSubjectsModule } from './behavior-subjects/behavior-subjects.module';
import { RouterDemoModule } from './router/router-demo.module';
import { NgrxModule } from './ngrx/ngrx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    ViewchildModule,
    BehaviorSubjectsModule,
    ReactiveFormsModule,
    RouterDemoModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
