import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

export class SignupUser {
  email: string
  password: string
  firstname: string
  lastname: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error = false
  model = new SignupUser()
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }


  reset() {
    this.error = false;
  }

  signup() {
    this.userService.signup(this.model).subscribe(data => {
      if (data) {
        this.router.navigate(['/login'])
      }
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
