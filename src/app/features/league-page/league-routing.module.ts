import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguePageComponent } from './league-comp/league-page.component';

const routes: Routes = [
  {
    path:'',
    component:LeaguePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
