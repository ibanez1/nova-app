import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { routeDashboard } from './dashboard.router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeDashboard]),
    FormsModule
  ],
  providers: [
  ]
})
export class DashboardModule {}
