import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { MessageListComponent } from './chats/message-list/message-list.component';
import { NewMessageComponent } from './chats/new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    MessageListComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
