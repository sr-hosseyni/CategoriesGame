import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading = 0;

  constructor() {
  }

  inc() {
    setTimeout(() => ++this.loading);
  }

  dec() {
    setTimeout(() => --this.loading);
  }
}
