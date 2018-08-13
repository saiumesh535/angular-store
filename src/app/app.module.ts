import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from 'angular-store-lib-src';

import { AppComponent } from './app.component';
import { UsernameReducer } from './app.compoenent.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot([UsernameReducer])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
