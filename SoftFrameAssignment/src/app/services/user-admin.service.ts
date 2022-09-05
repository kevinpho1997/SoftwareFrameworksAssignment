import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  // uname: string;
  // email: string;

  
  server: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { 
    // this.uname = "";
    // this.email = "";

  }

  registerUser(username: string, email: string, id: number, birthdate: string, role: string) {
    console.log("registerUser()");
    let user: User = {username, email, id, birthdate, role};
    return this.http.post(this.server + '/registerUser', user, httpOptions);
  }
  
}

