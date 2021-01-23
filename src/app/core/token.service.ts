import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenValue = new Subject();

  constructor() { }

  set token(value) {
    this.tokenValue.next(value);
    localStorage.setItem('selfmemory-token', value);
  }

  get token() {
    if (localStorage.getItem('selfmemory-token') != undefined)
      return localStorage.getItem('selfmemory-token');
    else return null;
  }
}
