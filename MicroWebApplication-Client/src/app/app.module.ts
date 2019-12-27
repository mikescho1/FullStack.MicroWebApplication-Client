import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/chat/message/message.component';
import { NewMessageComponent } from './components/chat/new-message/new-message.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { MessageListComponent } from './components/chat/message-list/message-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from "src/app/services/chat.service";
import { HeaderComponent } from './components/layout-components/header/header.component';
import { MainComponentComponent } from './components/layout-components/main-component/main-component.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    NewMessageComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    MessageListComponent,
    HeaderComponent,
    MainComponentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

