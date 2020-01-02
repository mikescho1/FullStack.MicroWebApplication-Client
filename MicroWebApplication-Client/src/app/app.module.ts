import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewMessageComponent } from './components/new-message/new-message.component';
import { ChatMessages } from './components/hub/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/hub/left-side-bar/left-side-bar.component';
import { ChatListComponent } from './components/hub/chat-list/chat-list.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HubComponent } from './components/hub/hub.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserChatsComponent } from './components/hub/user-chats/user-chats.component';
import { PollComponent } from './components/hub/right-side-bar/poll/poll.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment';
import { UserMessagesComponent } from './components/hub/user-messages/user-messages.component';
import { RightSideBarComponent } from './components/hub/right-side-bar/right-side-bar.component';
import { CreateChatComponent } from './components/hub/create-chat/create-chat.component';
import { HomeComponent } from './home/home.component'; // from login tutorial ---MS




@NgModule({
  declarations: [
    AppComponent,
    NewMessageComponent,
    ChatMessages,
    LeftSideBarComponent,
    ChatListComponent,
    NavBarComponent,
    HubComponent,
    RegisterComponent,
    LoginComponent,
    UserChatsComponent,
    PollComponent,
    UserMessagesComponent,
    RightSideBarComponent,
    CreateChatComponent,
    HomeComponent // From login tutorial ---MS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
