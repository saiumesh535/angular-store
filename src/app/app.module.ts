import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from 'angular-store-lib-src';

import { AppComponent } from './app.component';
import { UsernameReducer } from './app.compoenent.reducer';
import { PasswordReducer } from './password.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot([UsernameReducer, PasswordReducer], {
      logger: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
