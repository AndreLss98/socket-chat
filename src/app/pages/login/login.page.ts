import { Component, OnInit } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public nickName: string;

  constructor(private navigateService: MainNavigateService, private settingsService: GlobalConfgService, private chatServices: ChatService) {

  }

  ngOnInit() {
    this.chatServices.startConnection();
  }

  public startChat() {
    this.settingsService.setUserName(this.nickName);
    this.chatServices.registerUser();
    this.navigateService.goTo('home');
  }

}
