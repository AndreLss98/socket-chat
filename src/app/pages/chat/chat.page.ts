import { Component, OnInit, ViewChild } from '@angular/core';

import { ChatObject } from 'src/app/models/chat.model';

import { ChatService } from 'src/app/services/chat/chat.service';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  @ViewChild(IonContent, { static: false }) content: IonContent;
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
    // this.messages = this.chatService.getMessages();
  }

  public sendMessage() {
    let tempMessage: ChatObject = {
      message: this.message,
      user: this.settingsService.getUserName(),
      date: new Date()
    }
    // this.chatService.sendMessages(tempMessage);
    this.message = '';
    this.scrollContent();
  }

  private scrollContent() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    })
  }

}
