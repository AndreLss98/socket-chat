import { Injectable } from '@angular/core';
import { ChatObject } from 'src/app/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages: ChatObject[] = [
    {
      message: 'Olá',
      user: 'Ronaldo',
      date: new Date()
    },
    {
      message: 'Olá, tudo bem?',
      user: 'Andre',
      date: new Date()
    },
    {
      message: 'Tudo ótimo e você?',
      user: 'Ronaldo',
      date: new Date()
    },
    {
      message: 'Comprei uma passagem para São Francisco no Airbnb, quer viajar comigo?',
      user: 'Ronaldo',
      date: new Date()
    },
    {
      message: 'Vamos demais cara, obrigado pelo convite!',
      user: 'Andre',
      date: new Date()
    }
  ]

  constructor() {

  }

  public getMessages(): ChatObject[] {
    return this.messages;
  }

  public sendMessages(message: ChatObject) {
    if (this.messages) {
      this.messages.push(message);
    } else {
      this.messages = [message];
    }
  }
}
