import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = '/chats';

  constructor(private http: HttpClient) { }

  getChat(chatId: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${chatId}`);
  }

  createChat(chat: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}`, chat);
  }

  updateChatName(chatId: number, newChatName: string): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${chatId}`, newChatName);
  }

  deleteChat(chatId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${chatId}`, {responseType: 'text' });
  }

  getChatList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

}
