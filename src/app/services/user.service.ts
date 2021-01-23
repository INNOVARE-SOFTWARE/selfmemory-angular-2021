import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

export class LoginForm {
  email: string;
  password: string;
}
const base_url = environment.urlServer;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router,) { }


  login(formData: LoginForm) {
    return this.http.post(`${base_url}/users/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('selfmemory-token', resp.token)
        })
      );
  }
 
}
