import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = true;
  constructor(private authenticationService: AuthService, ) { }

  ngOnInit(): void {
  }

  onLogout() {
    const userDetails =  JSON.parse(localStorage.getItem('user') || '')
    this.authenticationService.logout(userDetails['email']).subscribe(
      {
      next:(response)=>console.log(response),
      error:(error)=>console.log(error),
      complete:()=>console.log('complete')
     }
     )
 }

}
