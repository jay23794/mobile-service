import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
      if (this.authenticationService.userValue) {
        this.router.navigate(['/']);
    }
    }
  loginForm:any


  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email :new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required])
    })
  }
  get loginFormControl(){
    return this.loginForm.controls
  }
  onSubmit(){
    this.authenticationService.login(this.loginForm.value.email)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    console.log(this.route.snapshot );

                    const returnUrl = '/dashboard'
                    this.router.navigate([returnUrl]);
                },
                error: error => {
                   // this.error = error;
                   // this.loading = false;
                }
            });

  }
}
