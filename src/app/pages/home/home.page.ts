import { Component, OnInit } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navigateService: MainNavigateService, private socket: Socket) {

  }

  ngOnInit() {
    this.socket.fromEvent('users-changed').subscribe(data => {
      console.log('Got data: ', data);
    });
  }

  public visualizeChat() {
    this.navigateService.goTo('chat');
  }

}
