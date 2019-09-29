import { Component, OnInit, ViewChild } from '@angular/core';

import { ChatService } from 'src/app/services/chat/chat.service';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  @ViewChild(IonContent, { static: false }) content: IonContent;
  public message = '';
  public currentUser;
  public currentChatUser;

  constructor(private settingsService: GlobalConfgService, public chatServices: ChatService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.currentUser = this.settingsService.getUserName();
    this.currentChatUser = this.chatServices.getChatUser();
    this.chatServices.createListernerUserMessages();
  }

  ionViewWillLeave() {
    this.chatServices.stopListernerUserMessages();
    this.chatServices.clearMessages();
  }

  public sendMessage() {
    const messageData = {
      message: this.message,
      id: this.currentChatUser.id,
      user: this.currentUser
    };
    this.chatServices.sendMessageForUser(messageData);
    this.chatServices.messages.push(messageData);
    this.message = '';
    this.scrollContent();
  }

  private scrollContent() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

}
