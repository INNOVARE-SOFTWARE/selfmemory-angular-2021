import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../core/token.service';
import { Memory } from '../models/memory';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryService extends GenericService<Memory> {

  constructor(http: HttpClient) {
    super(http, '/memories');
  }

  createOrReadMemory(userID: string) {
    return this.http.get<Memory>(this.actionUrl + `/user/${userID}`);
  }

}
