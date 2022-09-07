import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAdminService } from '../services/user-admin.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users: any[] = [];

  constructor(private uAdminServ: UserAdminService) {}

  ngOnInit(): void {
    this.getUsers();
    // console.log(this.users);
  }

  getUsers() {
    this.uAdminServ.getAllUsers().subscribe((data: any) => {
      data.toString();
      this.users = data;
      // console.log("this.users:", this.users);
    });
  }

  deleteClicked(event: any, userId: number) {
    console.log("deleteClicked()", userId);
    event.preventDefault();
    this.uAdminServ.deleteUser(userId).subscribe((data: any) => {
      console.log("user deleted");
      // data.toString();
      // this.users = data;
    })
  }

}
