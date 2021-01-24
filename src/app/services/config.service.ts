import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends GenericService<Config> {

  constructor(http: HttpClient) {
    super(http, '/configs');
  }
}
