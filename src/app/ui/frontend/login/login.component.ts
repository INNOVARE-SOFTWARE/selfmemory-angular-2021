import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false
  model: LoginForm

  constructor(public router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  reset() {
    this.error = false;
  }

  login() {
    this.userService.login(this.model)
      .subscribe(resp => {
        this.router.navigate(['/homepanel'])
      }, (err) => {
        this.error = true
        let errorCode = err.error.error.statusCode
        switch (errorCode) {
          case 401:
            break;
          case 422:
            break;
          default:
            console.log("Ocurrió un error: " + err.error.error.message);
            break;
        }
      });
  }
}
