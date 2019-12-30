import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = '/messages'

  constructor(private http: HttpClient) { }
  
  getMessage(messageId: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${messageId}`);
  }

  createMessage(message: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}`, message);
  }

  updateMessageName(messageId: number, message: string): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${messageId}`, message);
  }

  deleteMessage(messageId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${messageId}`, {responseType: 'text' });
  }

  getMessageList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }





} 
