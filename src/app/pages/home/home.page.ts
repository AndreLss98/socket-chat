import { Component, OnInit } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navigateService: MainNavigateService) {

  }

  ngOnInit() {
    
  }

  public visualizeChat() {
    this.navigateService.goTo('chat');
  }

}
