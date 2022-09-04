import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // http login request
  username: string;
  password: string;
  server: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    this.username = "";
    this.password = "";
  }

  loginEvent(username: string, password: string) {
    return this.http.post<User>(this.server + '/api/auth', {username: username, password: password});
  }
}
