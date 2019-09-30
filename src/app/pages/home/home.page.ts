import { Component, OnInit } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navigateService: MainNavigateService, public chatServices: ChatService) {

  }

  ngOnInit() {
    
  }

  public enterChat(userPosition: number) {
    this.chatServices.setChatUser(userPosition);
    this.navigateService.goTo('chat');
  }

}
