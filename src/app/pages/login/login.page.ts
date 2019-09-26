import { Component, OnInit } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';
import { GlobalConfgService } from 'src/app/services/settings/global-confg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public nickName: string;

  constructor(private navigateService: MainNavigateService, private settingsService: GlobalConfgService) {

  }

  ngOnInit() {

  }

  public toHome() {
    this.settingsService.setUserName(this.nickName);
    this.navigateService.goTo('home');
  }

}
