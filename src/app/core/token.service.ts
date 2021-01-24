import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  set token(value) {
    localStorage.setItem('selfmemory-token', value);
  }

  get token() {
    if (localStorage.getItem('selfmemory-token') != undefined)
      return localStorage.getItem('selfmemory-token');
    else return null;
  }

  set user(value) {
    localStorage.setItem('selfmemory-user', JSON.stringify(value));
  }

  get user() {
    if (localStorage.getItem('selfmemory-user') != undefined)
      return JSON.parse(localStorage.getItem('selfmemory-user'));
    else return null;
  }
}
