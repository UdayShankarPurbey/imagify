import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUserComponent } from './pages/user/about-user/about-user.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  }, 
  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path : '',
        redirectTo : 'users',
        pathMatch : 'full'
      },
      {
        path : 'users',
        children : [
          {
            path : '',
            redirectTo : 'aboutUser',
            pathMatch : 'full'
          },
          {
            path : 'aboutUser',
            component : AboutUserComponent
          },
          {
            path : 'updateUser',
            component : UpdateUserComponent
          }
        ]
      },
      {
        path : 'authorized',
        loadChildren : () => import('./pages/authorized/authorized.module').then(m => m.AuthorizedModule)
      }      
    ]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];
