import { Component, OnInit } from '@angular/core';
import { Message } from "src/app/models/message.model";
import { Chat } from 'src/app/models/chat.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  message: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.message.push( new Message(1, "chat1", "12/26/19", new User(1, "mikes", "password", "mike.schoenbeck@gmail.com", 1), new Chat(1, "chat1", "12/26/19") ));
  }

}
