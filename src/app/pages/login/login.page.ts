import { Component, OnInit } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public nickName: string;

  constructor(private navigateService: MainNavigateService, private settingsService: GlobalConfgService, private socket: Socket) {

  }

  ngOnInit() {
    this.socket.connect();
  }

  public startChat() {
    this.settingsService.setUserName(this.nickName);
    this.socket.emit('set-name', this.settingsService.getUserName());
    this.navigateService.goTo('home');
  }

}
