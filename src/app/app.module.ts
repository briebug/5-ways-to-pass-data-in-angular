import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputsModule } from './inputs/inputs.module';
import { ViewchildModule } from './viewchild/viewchild.module';
import { BehaviorSubjectsModule } from './behavior-subjects/behavior-subjects.module';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
