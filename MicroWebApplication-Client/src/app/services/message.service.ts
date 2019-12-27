import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) { }

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
