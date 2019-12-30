import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private serverUrl = 'http://localhost:8080/ws';
  private stompClient;
  constructor(private http: HttpClient) {
    this.connectToWebSockect();
  }

  connectToWebSockect() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic/public', (message) => {
        if ( message.body ) {
          console.log(message.body);
        }
      });
    });
  }

  getAllMessages(chatId) {
    return this.http.get<Message[]>(`http://localhost:8080/chat/${chatId}/messages`);
  }

  sendMessage(userId, chatId, message) {
    const theMessage = {
      messageBody: message
    };
    return this.http.post(`http://localhost:8080/user/${userId}/chat/${chatId}/message`, theMessage);
  }
}
