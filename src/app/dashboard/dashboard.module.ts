import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMobileDetailsComponent } from './add-mobile-details/add-mobile-details.component';
import { ShowMobileDetailsComponent } from './show-mobile-details/show-mobile-details.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { WebcamModule } from 'ngx-webcam';
import { AppCameraComponent } from './add-mobile-details/app-camera/app-camera.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewDetailsModalComponent } from '../shared/view-details-modal/view-details-modal.component';
import { EditDeviceDetailsComponent } from '../shared/edit-device-details/edit-device-details.component';
@NgModule({
  declarations: [
    AddMobileDetailsComponent,
    ShowMobileDetailsComponent,
    DashboardComponent,
    AppCameraComponent,
    ViewDetailsModalComponent,
    EditDeviceDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    WebcamModule,
    MatTableModule,
    MatDialogModule,

  ]
})
export class DashboardModule { }
