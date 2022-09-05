import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAdminService } from '../services/user-admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  id: number;
  birthdate: string;
  role: string;
  pword: string;

  constructor(private router: Router, private uAdminServ: UserAdminService) {
    this.id = 0;
    this.birthdate = "2022-01-01";
    this.role = "default";
    this.pword = "password";
  }

  ngOnInit(): void {
  }

  registerClicked(event: any) {
    event.preventDefault();
    this.uAdminServ.registerUser(
      this.username, this.email, this.id, this.birthdate, this.role)
        .subscribe(
          (data: any) => {
            console.log(data);
          }
        )
  }

}
