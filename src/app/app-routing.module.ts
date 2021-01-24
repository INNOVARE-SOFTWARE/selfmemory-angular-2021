import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoggedGuard } from './core/logged.guard';
import { ErrorComponent } from './ui/error/error.component';
import { HomepageComponent } from './ui/frontend/homepage/homepage.component';
import { LoginComponent } from './ui/frontend/login/login.component';
import { HomepanelComponent } from './ui/panel/homepanel/homepanel.component';

const routes: Routes = [
  {
    path: 'memory',
    component: HomepanelComponent,
    canActivate: [AuthGuard],
    //child
  },
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [LoggedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [LoggedGuard]
  },
  {
    path: '404',
    component: ErrorComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
