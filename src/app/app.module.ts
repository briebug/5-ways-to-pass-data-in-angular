import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsModule } from './inputs/inputs.module';
import { ViewchildModule } from './viewchild/viewchild.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    ViewchildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
