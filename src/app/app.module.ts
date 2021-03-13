import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ParticlesComponent } from './particles/particles.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
