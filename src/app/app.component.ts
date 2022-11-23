import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './authentication/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobile-service-app';
  constructor(private themeService: ThemeService) { }
  isDarkTheme!: Observable<boolean>;
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    console.log(checked);

    this.themeService.setDarkTheme(checked);
  }
}
