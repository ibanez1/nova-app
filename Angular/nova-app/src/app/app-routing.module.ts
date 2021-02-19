import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },

  // { path: 'dashboard',
  //     loadChildren: './dashboard/dashboard.module#DashboardModule'
  //     // loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export const AppRouting = RouterModule.forRoot(routes, {
// });
export class AppRoutingModule { }
