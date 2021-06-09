import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./features/home-page/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'info',
    loadChildren: () => import ('./features/info-page/info.module').then((module) => module.InfoModule)
  },
  {
    path: 'paint',
    loadChildren: () => import ('./features/paint-page/paint.module').then((module) => module.PaintModule)
  },
  {
    path: 'register',
    loadChildren: () => import ('./features/register-page/register.module').then((module) => module.RegisterModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import ('./features/tournament-page/torunament.module').then((module) => module.TorunamentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
