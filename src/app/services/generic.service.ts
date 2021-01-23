import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  public actionUrl: string;

  constructor(public http: HttpClient, private rest: string) {
    this.actionUrl = environment.urlServer + rest;
  }

  public getAll(json: string) {
    return this.http.get<T[]>(this.actionUrl + '?filter=' + json);
  }

  public get<T>(id: string) {
    return this.http.get<T>(this.actionUrl + '/' + id);
  }

  public count<T>(json: string) {
    return this.http.get<T>(this.actionUrl + '/count?where=' + json);
  }

  public save<T>(itemName: T) {
    return this.http.post<T>(this.actionUrl, itemName);
  }

  public patch<T>(itemName: T, id: string) {
    return this.http.patch<T>(this.actionUrl + '/' + id, itemName);
  }

  public remove<T>(id: string) {
    return this.http.delete<T>(this.actionUrl + '/' + id);
  }
}