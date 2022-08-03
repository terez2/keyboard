import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { RadialComponent } from './components/radial/radial.component';
import { CustomKeyboardComponent } from './components/custom-keyboard/custom-keyboard.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    RadialComponent,
    CustomKeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

