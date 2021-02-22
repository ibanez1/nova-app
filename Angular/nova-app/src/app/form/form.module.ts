import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { routeForm } from './form.router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([routeForm]),
    FormsModule
  ],
  providers: [
  ]
})
export class FormModule {}
