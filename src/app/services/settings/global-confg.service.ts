import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfgService {

  private userName = '';

  constructor() {

  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(name: string) {
    this.userName = name;
  }
}
