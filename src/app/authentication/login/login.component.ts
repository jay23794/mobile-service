import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
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
    console.log(this.loginForm.controls['email'].errors  );
    
    
  }
}
