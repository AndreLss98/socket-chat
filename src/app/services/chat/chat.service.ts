import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { GlobalConfgService } from '../settings/global-confg.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public users: any = [];
  private chatUser: any;

  public messages: any[] = [];

  private listerMessages: Subscription;

  constructor(private socket: Socket, private settings: GlobalConfgService) {

  }

  public setChatUser(pos) {
    this.chatUser = this.users[pos];
  }

  public getChatUser() {
    return this.chatUser;
  }

  public clearMessages() {
    this.messages = [];
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
      this.users = data;
      const pos = this.users.findIndex(element => element.userName === this.settings.getUserName());
      if (pos > -1) {
        this.users.splice(pos, 1);
      }
    });
  }

  public createListernerUserMessages() {
    this.listerMessages = this.socket.fromEvent('send-private-message').subscribe(data => {
      this.messages.push(data);
    });
  }

  public stopListernerUserMessages() {
    this.listerMessages.unsubscribe();
  }

  public sendMessageForUser(messageData) {
    this.socket.fromEvent('send-message').subscribe(data => {
      this.messages.push(data);
    });
    this.socket.emit('private-message', messageData);
  }
}
