import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditsComponent } from './credits/credits.component';
import { ImageRestoreComponent } from './transform/image-restore/image-restore.component';
import { GenerativeFillComponent } from './transform/generative-fill/generative-fill.component';
import { ObjectRemoveComponent } from './transform/object-remove/object-remove.component';
import { ObjectRecolorComponent } from './transform/object-recolor/object-recolor.component';
import { BackgroundRemoveComponent } from './transform/background-remove/background-remove.component';
import { SubLayoutComponent } from './sub-layout/sub-layout.component';

const routes: Routes = [
  {
    path : '',
    component : SubLayoutComponent,
    children : [
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
            redirectTo : ':restore',
            pathMatch : 'full'
          },
          {
            path : 'restore',
            component : ImageRestoreComponent
          },
          {
            path : 'fill',
            component : GenerativeFillComponent
          },
          {
            path : 'remove',
            component : ObjectRemoveComponent
          },
          {
            path : 'recolor',
            component : ObjectRecolorComponent
          },
          {
            path : 'removeBackground',
            component : BackgroundRemoveComponent
          }
          
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
