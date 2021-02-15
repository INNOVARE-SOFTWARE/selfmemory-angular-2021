import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../core/token.service';
import { Chapter } from '../models/chapter';
import { Memory } from '../models/memory';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryService extends GenericService<Memory> {

  constructor(http: HttpClient) {
    super(http, '/memories');
  }

  //new methods
  createOrReadMemory(userID: string) {
    return this.http.get<Memory>(this.actionUrl + `/user/${userID}`);
  }

  //new
  getChapters(memoryId: string) {
    return this.http.get<Chapter[]>(this.actionUrl + `/${memoryId}/chapters`);
  }

  //send book to emails
  sendBook(userid: string) {
    return this.http.get<any>(this.actionUrl + `/book/${userid}`);
  }

}
