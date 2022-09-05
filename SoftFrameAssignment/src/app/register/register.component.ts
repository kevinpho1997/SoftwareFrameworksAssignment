import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: number;
  birthdate: string;
  role: string;
  pword: string;

  constructor() {
    this.id = 0;
    this.birthdate = "2022-01-01";
    this.role = "default";
    this.pword = "password";
  }

  ngOnInit(): void {
  }

  registerClicked() {

  }

}
