import { Component, OnInit } from '@angular/core';

import { ChatObject } from 'src/app/models/chat.model';

import { ChatService } from 'src/app/services/chat/chat.service';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public message = '';
  public messages: ChatObject[] = [];
  public currentUser;

  constructor(private chatService: ChatService, private settingsService: GlobalConfgService) {

  }

  ngOnInit() {
    this.fetchMessages();
    this.currentUser = this.settingsService.getUserName();
  }

  public fetchMessages() {
    this.messages = this.chatService.getMessages();
  }

  public sendMessage() {
    let tempMessage: ChatObject = {
      message: this.message,
      user: this.settingsService.getUserName(),
      date: new Date()
    }
    this.chatService.sendMessages(tempMessage);
    this.message = '';
  }

}
