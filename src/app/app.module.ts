import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Add } from './add.pipe/add.pipe.component';
import { AddPipe } from './add.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Add.PipeComponent,
    AddPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
