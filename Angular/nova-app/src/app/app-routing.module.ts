import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },

  { path: 'dashboard',
      loadChildren: () => import('src/app/dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'form',
  loadChildren: () => import('src/app/form/form.module').then(mod => mod.FormModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export const AppRouting = RouterModule.forRoot(routes, {
// });
export class AppRoutingModule { }
