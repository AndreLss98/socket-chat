import { Component, OnInit } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navigateService: MainNavigateService) {

  }

  ngOnInit() {

  }

  public toHome() {
    this.navigateService.goToHome();
  }

}
