import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/users'

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  createUser(user: Object): Observable<Object>  {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUserName(userId: number, userName: string): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${userId}`, userName);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`, {responseType: 'text' });
  }

  getUserList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

}
