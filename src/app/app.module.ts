import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserChatsComponent } from './hub/user-chats/user-chats.component';
import { ChatMessagesComponent } from './hub/chat-messages/chat-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    LoginComponent,
    RegisterComponent,
    UserChatsComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
