import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
