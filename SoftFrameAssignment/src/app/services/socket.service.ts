import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {io, Socket} from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  constructor() {
    this.socket = io(SERVER_URL);
  }

  // 
  initSocket() {
    this.socket = io(SERVER_URL);
    console.log("initSocket()");
    return ()=>{this.socket.disconnect();}
  }

  // emits a string parameter to the socket
  send(message: string) {
    console.log("message:", message);
    this.socket.emit('message', message);
  }

  // gets message on observable change
  getMessage() {
    return new Observable(observer => {
      this.socket.on('message', (data: string) => {observer.next(data);
        console.log("getMessage() data:", data);
      });
      
    });
  }
}
