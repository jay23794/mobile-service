import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMobileDetailsComponent } from './add-mobile-details/add-mobile-details.component';
import { ShowMobileDetailsComponent } from './show-mobile-details/show-mobile-details.component';



@NgModule({
  declarations: [
    AddMobileDetailsComponent,
    ShowMobileDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
