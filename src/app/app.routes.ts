import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
 
  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path : '',
        redirectTo : 'authorized',
        pathMatch : 'full'
      },
      {
        path : 'authorized',
        loadChildren : () => import('./pages/authorized/authorized.module').then(m => m.AuthorizedModule)
      }      
    ]
  }
];
