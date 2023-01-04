import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMobileDetailsComponent } from './add-mobile-details/add-mobile-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowMobileDetailsComponent } from './show-mobile-details/show-mobile-details.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
    {path:'', component:AddMobileDetailsComponent, },
    {path:'add-mobile', component:AddMobileDetailsComponent, },
    {path:'show-mobile', component:ShowMobileDetailsComponent, },
  ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
