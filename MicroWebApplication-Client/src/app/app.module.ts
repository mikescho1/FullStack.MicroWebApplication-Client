import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NewMessageComponent,
    MessageListComponent,
    LeftSideBarComponent,
    ChatListComponent,
    NavBarComponent,
    FormsModule,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
