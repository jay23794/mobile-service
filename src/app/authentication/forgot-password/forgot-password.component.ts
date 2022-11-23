import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  isEmailVerified=true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl=new FormControl('', [Validators.required]);
  resetPasswordControl=new FormControl('', [Validators.required]);

  ngOnInit(): void {

  }



}
