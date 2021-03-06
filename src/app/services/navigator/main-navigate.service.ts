import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainNavigateService {

  constructor(private route: Router) {

  }

  public goTo(url: string, params?: any) {
    this.route.navigateByUrl(url, params);
  }
}
