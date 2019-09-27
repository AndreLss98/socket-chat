import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { GlobalConfgService } from '../settings/global-confg.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public users = [];

  constructor(private socket: Socket, private settings: GlobalConfgService) {

  }

  public startConnection() {
    this.socket.connect();
    this.createListenerUserRegistration();
  }

  public registerUser() {
    this.socket.emit('set-name', this.settings.getUserName());
  }

  public createListenerUserRegistration() {
    this.socket.fromEvent('users-changed').subscribe(data => {
      if (data['event'] === 'joined' && data['user'] !== this.settings.getUserName()) {
        this.users.unshift({userName: data['user']});
      }
    });
  }
}
