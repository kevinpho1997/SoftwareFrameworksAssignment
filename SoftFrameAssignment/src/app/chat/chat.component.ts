import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAdminService } from '../services/user-admin.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users = [];

  constructor(private uAdminServ: UserAdminService) { 
    
  }

  ngOnInit(): void {

  }

  getUsers() {
    this.uAdminServ.getAllUsers().subscribe((data: any) => {
      this.users = data
    });
  }

}
