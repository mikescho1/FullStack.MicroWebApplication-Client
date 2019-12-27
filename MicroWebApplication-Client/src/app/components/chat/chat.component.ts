import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getAllMessages(1).subscribe(response => console.log(response));
  }

}
