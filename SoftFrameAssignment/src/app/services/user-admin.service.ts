import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const httpOptionsStr = {
//   headers: new HttpHeaders({ 
//     'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin": "http://localhost:4200"
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  // userId: number = 0;

  server: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  // register user with these parameters
  registerUser(username: string, email: string, id: number, birthdate: string, role: string) {
    // console.log("registerUser()");
    let user: User = {username, email, id, birthdate, role};
    return this.http.post<User>(this.server + '/user/create', user, httpOptions);
  }

  // calls the /users route
  getAllUsers() {
    return this.http.get(this.server + '/users', httpOptions);
  }

  // calls the delete user route
  deleteUser(userId: number) {
    console.log("deleteUser()", userId);
    let user = {userId: userId}
    return this.http.post(this.server + '/user/delete', user, httpOptions);
  }
  
}

