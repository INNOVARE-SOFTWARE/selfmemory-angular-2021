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
  model = new LoginForm()

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
        this.router.navigate(['/memory'])
      }, (err) => {
        this.error = true
        let errorCode = err.error.error.statusCode
        switch (errorCode) {
          case 401:
            console.log("Ocurrió un error: " + err.error);
            break;
          case 422:
            console.log("Ocurrió un error: " + err.error);
            break;
          default:
            console.log("Ocurrió un error: " + err.error);
            break;
        }
      });
  }
}
