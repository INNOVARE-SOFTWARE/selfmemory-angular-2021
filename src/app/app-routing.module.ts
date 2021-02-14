import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoggedGuard } from './core/logged.guard';
import { ErrorComponent } from './ui/error/error.component';
import { HomepageComponent } from './ui/frontend/homepage/homepage.component';
import { LoginComponent } from './ui/frontend/login/login.component';
import { SignupComponent } from './ui/frontend/signup/signup.component';
import { ChapterComponent } from './ui/panel/chapter/chapter.component';
import { FormComponent } from './ui/panel/chapter/form/form.component';
import { ConfigComponent } from './ui/panel/config/config.component';
import { HomepanelComponent } from './ui/panel/homepanel/homepanel.component';
import { MemoryComponent } from './ui/panel/memory/memory.component';
import { WelcomeComponent } from './ui/panel/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'memory',
    component: HomepanelComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'write',
        component: MemoryComponent
      },
      {
        path: 'chapter',
        component: ChapterComponent
      },
      {
        path: 'chapter/:id',
        component: FormComponent
      },
      {
        path: 'config',
        component: ConfigComponent
      },
    ]
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
    path: 'signup',
    component: SignupComponent,
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
