import { Component, OnInit, ViewChild } from '@angular/core';

import { ChatService } from 'src/app/services/chat/chat.service';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PrivateChat } from 'src/app/models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  @ViewChild(IonContent, { static: false }) content: IonContent;
  public message = '';
  public currentUser;
  public currentPrivateChat: PrivateChat;

  constructor(private settings: GlobalConfgService, public chatServices: ChatService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.currentUser = this.settings.getUserName();
    this.currentPrivateChat = this.chatServices.getChatUser();
  }

  ionViewWillLeave() {
    
  }

  public sendMessage() {
    const messageData = {
      idTarget: this.currentPrivateChat.privateChatId,
      idSender: this.settings.getUserId(),
      senderName: this.settings.getUserName(),
      text: this.message
    };
    this.chatServices.sendMessageForUser(messageData);
    this.currentPrivateChat.messages.push({ message: this.message, userName: this.currentUser });
    this.message = '';
    this.scrollContent();
  }

  private scrollContent() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

}
