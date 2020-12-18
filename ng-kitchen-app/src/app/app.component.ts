import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { FridgeService } from './fridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-kitchen-app';
  isAuthenticated = false;

  constructor(
    private oktaAuth: OktaAuthService,
    private fridgeService: FridgeService
  ) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated)
    );
  }

  ngOnInit(): void {
    this.oktaAuth
      .isAuthenticated()
      .then((isAuthenticated) => this.updateAuthState(isAuthenticated));
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(console.log);
      this.fridgeService.getUserInfo().then(console.log);
    }
  }

  login() {
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    this.oktaAuth.signOut();
  }
}
