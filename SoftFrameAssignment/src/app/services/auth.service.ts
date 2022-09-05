import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // http login request
  uname: string;
  pword: string;
  server: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    this.uname = "";
    this.pword = "";
  }

  loginEvent(uname: string, pword: string) {
    console.log("loginEvent()", uname);
    let user = {username: uname, password: pword};
    return this.http.post(this.server + '/login', user, httpOptions);
  }
}
