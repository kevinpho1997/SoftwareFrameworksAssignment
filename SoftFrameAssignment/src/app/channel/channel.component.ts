import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  messageContent: string = "";
  messages: string[] = [];
  ioConnection: any;

  constructor(private socketServ: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  // starts a socket connection
  private initIoConnection() {
    this.socketServ.initSocket();
    this.ioConnection = this.socketServ.getMessage()
      .subscribe((message: any) => {
        this.messages.push(message);
      });
  }

  // sends chat message
  chat() {
    if(this.messageContent) {
      this.socketServ.send(this.messageContent);
      this.messageContent = "";
    } else {
      console.log('no message');
    }
  }
}
