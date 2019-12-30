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

  }

}
