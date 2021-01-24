import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends GenericService<Chapter> {

  constructor(http: HttpClient) {
    super(http, '/chapters');
  }

  //No more here

}
