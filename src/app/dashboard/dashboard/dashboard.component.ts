import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = true;
  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    const userDetails =  JSON.parse(localStorage.getItem('user') || '')
    console.log(userDetails);
    this.authenticationService.logout(userDetails['email']).subscribe((data)=>{
      console.log("logout successfully");

    })
 }

}
