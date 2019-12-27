import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  chat: Chat[] = [];

  constructor() { }

  ngOnInit() {
    this.chat.push( new Chat(1, "Chat 1", "12/26/19"));
    this.chat.push( new Chat(2, "Chat 2", "12/26/19"));
    this.chat.push( new Chat(3, "Chat 3", "12/26/19"));
  }


  

}
