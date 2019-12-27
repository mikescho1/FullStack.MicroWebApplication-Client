import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent implements OnInit {
  input;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage(2, 1, this.input).subscribe(response =>
      console.log(response)
    );
    this.input = '';
  }
}
