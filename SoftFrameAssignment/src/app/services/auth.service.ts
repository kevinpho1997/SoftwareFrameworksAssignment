import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // http login request
  // uname: string;
  // pword: string;
  server: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { 
    // this.uname = "";
    // this.pword = "";
  }

  // logins a user
  loginEvent(uname: string, pword: string) {
    console.log("loginEvent()", uname);
    this.isLoggedIn = true;
    let user = {username: uname, password: pword};
    return this.http.post(this.server + '/login', user, httpOptions);
  }

  // logouts the user
  logoutEvent() {
    this.isLoggedIn = false;
    localStorage.clear();
    alert("You have been logged out");
    this.router.navigateByUrl('/login');
  }
}
