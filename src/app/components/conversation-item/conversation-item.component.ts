import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {

  @Input() name: string;
  @Input() lastMessage: string;
  @Input() date;

  constructor() {

  }

  ngOnInit() {

  }



}
