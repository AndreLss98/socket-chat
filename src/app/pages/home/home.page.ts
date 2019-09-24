import { Component } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navigateService: MainNavigateService) {

  }

  public visualizeChat() {
    this.navigateService.goToChatPage()
  }

}
