import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/chat/message/message.component';
import { NewMessageComponent } from './components/chat/new-message/new-message.component';
import { LoginComponent } from './components/login/login.component';
import { MessageListComponent } from './components/chat/message-list/message-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from 'src/app/services/chat.service';
import { HeaderComponent } from './components/layout-components/header/header.component';
import { MainComponentComponent } from './components/layout-components/main-component/main-component.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    NewMessageComponent,
    LoginComponent,
    MessageListComponent,
    HeaderComponent,
    MainComponentComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

