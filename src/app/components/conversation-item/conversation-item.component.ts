import { Component, OnInit, Input } from '@angular/core';
import { MainNavigateService } from 'src/app/services/navigator/main-navigate.service';

@Component({
  selector: 'conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {

  @Input() name: string;
  @Input() lastMessage: string;
  @Input() date;

  constructor(private navigator: MainNavigateService) {

  }

  ngOnInit() {
    
  }

  public enterChat() {
    this.navigator.goTo('chat');
  }

}
