import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  // login user with form data and set localStorage
  public loginClicked(event: any) {
    event.preventDefault();
    // console.log(this.username);
    this.authservice.loginEvent(this.username, this.password).subscribe(
      (data: any) => {
        // if (data.valid)
        // console.log(data);
        if (data[0].username && data[0].userid) {
          // console.log("LOGIN IS VALID");
          localStorage.setItem('username', data.username);
          // this.authservice.login();
          this.router.navigateByUrl('/chat');
        } else {
          alert("Login credentials are incorrect");
        }
      }
    )

  }
}
