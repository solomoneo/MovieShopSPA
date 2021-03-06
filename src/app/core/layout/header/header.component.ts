import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  currentUser: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
    if (this.isAuthenticated){
      this.currentUser = this.authService.getUserFullName();
    };
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
