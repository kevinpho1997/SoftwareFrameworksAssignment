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

  constructor(private router: Router, private httpClient: HttpClient, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  public loginClicked() {
    this.authservice.loginEvent(this.username, this.password).subscribe(
      (data: any) => {
        // if (data.valid)
        if (data.valid) {
          localStorage.setItem('username', data.username);
          this.router.navigateByUrl('/chat');
        } else {
          alert("Login credentials are incorrect");
        }
      }
    )

  }
}
