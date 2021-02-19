import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { routeDashboard } from './dashboard.router';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([routeDashboard]),
    FormsModule,
    DashboardComponent
  ],
  providers: [
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
