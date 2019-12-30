import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.currentUser;
  }

  loginUser(username) {
    return this.http.get(`http://localhost:8080/user/${username}/login`)
      .pipe(
        map(result => {
          console.log('Woo');
          this.currentUser = result;
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
        map(result => {
          console.log('Woo');
          this.currentUser = result;
        }),
        catchError(error => {
          console.log('Oh No, mi pipe');
          return of();
        })
      );
  }
}