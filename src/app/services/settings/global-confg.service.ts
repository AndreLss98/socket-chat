import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfgService {

  private userName: string;
  private userId: string;
  constructor() {

  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(name: string) {
    this.userName = name;
  }

  public setUserId(id: string) {
    this.userId = id;
  }

  public getUserId(): string {
    return this.userId;
  }
}
