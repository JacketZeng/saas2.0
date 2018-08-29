import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  userName: Observable<string>;
  token: Observable<string>;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // Capture the session ID if available
    this.userName = this.route
      .queryParamMap
      .pipe(map(params => params.get('user_name') || 'None'));

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));
  }
}
