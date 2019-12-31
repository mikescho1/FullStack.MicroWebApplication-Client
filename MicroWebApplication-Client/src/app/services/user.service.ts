import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.currentUser;
  }

  loginUser(username) {
    return this.http.get(`http://localhost:8080/user/${username}/login`)
      .pipe(
        map((result: User) => {
          this.currentUser = result;
          return result;
        }),
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of();
        })
      );
  }

  registerUser(user) {
    return this.http.post(`http://localhost:8080/user/`, user)
      .pipe(
        map((result: User) => {
          this.currentUser = result;
          return result;
        }),
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of();
        })
      );
  }
}