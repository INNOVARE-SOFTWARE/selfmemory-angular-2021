import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenService } from 'src/app/core/token.service';
import { LocalUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepanel',
  templateUrl: './homepanel.component.html',
  styleUrls: ['./homepanel.component.css']
})
export class HomepanelComponent implements OnInit {

  public user: LocalUser

  constructor(private breakpointObserver: BreakpointObserver,
    private tokenService: TokenService,
    public router: Router,
    private userService: UserService) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  ngOnInit(): void {
    //load user
    this.userService.whoAmI().subscribe((data: LocalUser) => {
      this.user = data
      this.tokenService.user = data
    })
  }



  logout() {
    localStorage.removeItem('selfmemory-token')
    localStorage.removeItem('selfmemory-user')
    this.router.navigate(['/'])

  }

}
