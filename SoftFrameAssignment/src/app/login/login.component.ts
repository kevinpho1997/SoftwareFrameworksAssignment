import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  public loginClicked(event: any) {
    
  }
}
