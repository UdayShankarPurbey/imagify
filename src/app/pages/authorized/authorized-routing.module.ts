import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditsComponent } from './credits/credits.component';
import { TransformComponent } from './transformation/transform/transform.component';
import { UpdateComponent } from './transformation/update/update.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'credits',
    component : CreditsComponent
  },
  {
    path : 'trasformation',
    children : [
      {
        path : '',
        redirectTo : ':id',
        pathMatch : 'full'
      },
      {
        path : ':id',
        component : TransformComponent
      },
      {
        path : 'update/:id',
        component : UpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
