import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FridgeItem } from './fridge-item';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private baseUrl = `${environment.baseUrl}/api/appliances/fridge`;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
  }

  getFridgeItems(): Promise<FridgeItem[]> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http
      .get<FridgeItem[]>(`${this.baseUrl}/contents`, { headers: headers })
      .toPromise();
  }

  getUserInfo(): Promise<any> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http
      .get<any>(`${environment.baseUrl}/api/users/test`, { headers: headers })
      .toPromise();
  }
}
