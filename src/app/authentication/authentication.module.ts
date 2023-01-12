import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ChangePasswordComponent } from './forgot-password/change-password/change-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../_helpers/jwt-inteceptor/jwt-interceptor.service';
import { ErrorInterceptor } from '../_helpers/error-interceptor/error.service';
@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,

  ],

},

)
export class AuthenticationModule { }
