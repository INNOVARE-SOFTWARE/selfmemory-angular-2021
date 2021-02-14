import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenService } from 'src/app/core/token.service';
import { LocalUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDialogComponent } from '../../component/confirm-dialog/confirm-dialog.component';

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
    public dialog: MatDialog,
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
    }, (err) => {
      localStorage.removeItem('selfmemory-token')
      localStorage.removeItem('selfmemory-user')
      this.router.navigate(['/'])
    })
  }

  logout() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        message: 'Desea salir de Self Memory?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.removeItem('selfmemory-token')
        localStorage.removeItem('selfmemory-user')
        this.router.navigate(['/'])
      }
    });


  }

}
