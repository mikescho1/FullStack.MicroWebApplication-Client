import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat.model';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  chats: Chat[] = [];

  constructor() { }

  ngOnInit() {
    this.chats.push( new Chat(1, "Chat 1", "12/26/19"));
    this.chats.push( new Chat(2, "Chat 2", "12/26/19"));
    this.chats.push( new Chat(3, "Chat 3", "12/26/19"));
  }


  

}
