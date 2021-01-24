import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LocalUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepanel',
  templateUrl: './homepanel.component.html',
  styleUrls: ['./homepanel.component.css']
})
export class HomepanelComponent implements OnInit {

  user: LocalUser

  constructor(private breakpointObserver: BreakpointObserver,
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
    })
  }



  logout() {
 
  }

}
