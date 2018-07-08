import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    PushNotificationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
