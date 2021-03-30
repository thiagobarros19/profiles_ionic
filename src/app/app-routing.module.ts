import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ProfileListPage } from './pages/profile-list/profile-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePage, },
  { path: 'profile/:id', component: ProfilePage, },
  { path: 'profile-list', component: ProfileListPage, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
