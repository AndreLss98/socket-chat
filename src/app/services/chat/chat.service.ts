import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { GlobalConfgService } from '../settings/global-confg.service';

import { Subscription } from 'rxjs';
import { PrivateChat } from 'src/app/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private listenerMessages: Subscription;
  private listenerFirstConection: Subscription;
  public chat: PrivateChat[] = [];

  private currentChat: PrivateChat;

  constructor(private socket: Socket, private settings: GlobalConfgService) {

  }

  public setChatUser(pos) {
    this.currentChat = this.chat[pos];
  }

  public getChatUser() {
    return this.currentChat;
  }

  public clearMessages() {

  }

  public startConnection() {
    this.socket.connect();
    this.socket.on('first-connection', (users) => {
      users.forEach(element => {
        this.chat.push({ privateChatId: element.id, chatName: element.userName, messages: [] });
      });
    });
    this.createListenerUserRegistration();
  }

  public registerUser() {
    this.socket.emit('login-user', this.settings.getUserName());
    this.socket.on('my-id', (MyId) => {
      this.settings.setUserId(MyId.id);
    });
    this.createListenerUserMessages();
  }

  public sendMessageForUser(messageData) {
    this.socket.emit('send-private-message', messageData);
  }

  public createListenerUserRegistration() {
    this.socket.fromEvent('new-user').subscribe((data: any) => {
      this.chat.push({ privateChatId: data.id, chatName: data.userName, messages: [] });
    });
  }

  public createListenerUserMessages() {
    this.listenerMessages = this.socket.fromEvent('private-message').subscribe((data: any) => {
      const pos = this.chat.findIndex(element => element.privateChatId === data.idSender);
      if (pos > -1) {
        this.chat[pos].messages.push({ message: data.message, userName: data.senderName });
      }
    });
  }

  public stopListernerUserMessages() {
    this.listenerMessages.unsubscribe();
  }
}
